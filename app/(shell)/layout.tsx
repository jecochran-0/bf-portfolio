"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  LeftSidebar,
  EnvelopeIcon,
} from "../components/LeftSidebar/LeftSidebar";
import { PrimaryNav } from "../components/PrimaryNav/PrimaryNav";
import { TransitionErrorBoundary } from "../components/TransitionErrorBoundary";
import { PRIMARY_NAV_ITEMS } from "../config/navigation";

import styles from "./shell.module.css";

const BACKGROUND_SOURCES = [
  "/assets/Portfolio-Background2.png",
  "/assets/Portfolio-Background3.png",
  "/assets/Portfolio-Background4.png",
  "/assets/Portfolio-Background5.png",
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/jake-cochran",
    label: "LinkedIn",
    icon: (
      <Image
        src="/assets/linkedin-app-white-icon.webp"
        alt="LinkedIn icon"
        width={34}
        height={34}
      />
    ),
    external: true,
  },
  {
    href: "https://x.com/Jake_Snake0",
    label: "X",
    icon: (
      <Image src="/assets/x-icon.png" alt="X icon" width={34} height={34} />
    ),
    external: true,
  },
  {
    href: "mailto:jake.e.cochran@gmail.com",
    label: "Email",
    icon: <EnvelopeIcon />,
  },
];

const TAB_CAMERA_POSITIONS: Record<string, number> = {
  "/home": -40,
  "/projects": -10,
  "/about": 10,
  "/contact": 40,
};

type ShellLayoutProps = {
  children: ReactNode;
};

export default function ShellLayout({ children }: ShellLayoutProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [backgroundSrc, setBackgroundSrc] = useState(BACKGROUND_SOURCES[0]);

  useEffect(() => {
    const sessionKey = "portfolio-bg-selection";
    const stored = sessionStorage.getItem(sessionKey);
    if (stored) {
      setBackgroundSrc(stored);
    } else {
      const selected =
        BACKGROUND_SOURCES[
          Math.floor(Math.random() * BACKGROUND_SOURCES.length)
        ];
      sessionStorage.setItem(sessionKey, selected);
      setBackgroundSrc(selected);
    }
  }, []);

  useEffect(() => {
    // Remove initial load fade-in after animation completes
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  const childArray = Children.toArray(children);

  const hasDataShellContent = (
    child: unknown
  ): child is ReactElement<Record<string, unknown>> => {
    if (!isValidElement(child)) return false;
    const props = child.props as Record<string, unknown> | null | undefined;
    if (typeof props !== "object" || props === null) return false;
    return "data-shell-content" in props;
  };

  const contentNode =
    childArray.find(hasDataShellContent) ??
    (isValidElement(children) ? (children as ReactElement) : <>{children}</>);

  const memoContent = useMemo(
    () => ({ path: pathname, node: contentNode }),
    [pathname, contentNode]
  );

  const currentIndex = useMemo(() => {
    const match = PRIMARY_NAV_ITEMS.findIndex((item) =>
      pathname.startsWith(item.href)
    );
    return match >= 0 ? match : 0;
  }, [pathname]);

  const previousIndexRef = useRef(currentIndex);
  const directionRef = useRef<number>(1);

  useEffect(() => {
    const previous = previousIndexRef.current;
    if (previous !== currentIndex) {
      directionRef.current = currentIndex > previous ? 1 : -1;
      previousIndexRef.current = currentIndex;
    }
  }, [currentIndex]);

  const targetBackgroundX = useMemo(() => {
    const pathMatch = PRIMARY_NAV_ITEMS.find((item) =>
      pathname.startsWith(item.href)
    );
    const key = pathMatch?.href ?? "/home";
    return TAB_CAMERA_POSITIONS[key] ?? 0;
  }, [pathname]);

  const backgroundSpring = useSpring(targetBackgroundX, {
    stiffness: 120,
    damping: 20,
    mass: 0.9,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      backgroundSpring.set(targetBackgroundX);
      return;
    }
    backgroundSpring.set(targetBackgroundX);
  }, [targetBackgroundX, prefersReducedMotion, backgroundSpring]);

  // Initialize state after mount to avoid SSR/client mismatch
  // Simplified transition state - use single key-based system
  const [transitionKey, setTransitionKey] = useState(pathname);
  // Store content per key - ensures correct content for each key
  const contentMapRef = useRef<Map<string, ReactNode>>(new Map());
  const [isMounted, setIsMounted] = useState(false);
  // Track the key that's currently being displayed (for exit animation)
  const [displayKey, setDisplayKey] = useState(pathname);

  useEffect(() => {
    setIsMounted(true);
    contentMapRef.current.set(pathname, contentNode);
    setDisplayKey(pathname);
  }, []);

  const transitionDuration = prefersReducedMotion ? 0 : 0.7;
  const easing: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

  const isTransitioning = pathname !== transitionKey;

  // Handle exit complete - update displayKey to new key
  const handleExitComplete = () => {
    setDisplayKey(transitionKey);
    // Ensure new content is in map for the new key
    if (contentNode) {
      contentMapRef.current.set(pathname, contentNode);
    }
  };

  // Update transition key when pathname changes (triggers AnimatePresence)
  useEffect(() => {
    if (!isMounted) return;
    if (pathname !== transitionKey) {
      // Update direction before changing key
      const newIndex = PRIMARY_NAV_ITEMS.findIndex((item) =>
        pathname.startsWith(item.href)
      );
      const currentIndex = PRIMARY_NAV_ITEMS.findIndex((item) =>
        transitionKey.startsWith(item.href)
      );
      if (newIndex >= 0 && currentIndex >= 0) {
        directionRef.current = newIndex > currentIndex ? 1 : -1;
      }
      // Ensure old content is stored for current displayKey before changing
      contentMapRef.current.set(
        displayKey,
        contentMapRef.current.get(displayKey) ?? contentNode
      );
      // Store new content in map for new pathname
      contentMapRef.current.set(pathname, contentNode);
      // Update transitionKey - this triggers AnimatePresence to see key change
      // displayKey stays as old key, so old content is shown during exit
      // After exit completes, handleExitComplete updates displayKey to new key
      setTransitionKey(pathname);
    }
  }, [pathname, transitionKey, isMounted, contentNode, displayKey]);

  // Keep content map updated
  useEffect(() => {
    if (isMounted) {
      contentMapRef.current.set(pathname, contentNode);
    }
  }, [pathname, contentNode, isMounted]);

  // Safety timeout to clear stuck transition state
  useEffect(() => {
    if (isTransitioning) {
      // If transition key doesn't match pathname after timeout, force sync
      const safetyTimeout = transitionDuration * 1000 * 2 + 500;
      const timeout = setTimeout(() => {
        if (transitionKey !== pathname) {
          console.warn("Transition timeout: forcing sync", {
            transitionKey,
            pathname,
          });
          setTransitionKey(pathname);
        }
      }, safetyTimeout);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, transitionDuration, transitionKey, pathname]);

  // Single set of variants for both exit and enter
  const pageVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir * 150,
      filter: "brightness(1.08)",
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: "brightness(1)",
      transition: {
        duration: transitionDuration,
        ease: easing,
        type: "tween" as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir * -150,
      filter: "brightness(0.6)",
      transition: {
        duration: transitionDuration,
        ease: easing,
        type: "tween" as const,
      },
    }),
  };

  return (
    <div className={`${styles.wrapper} ${isInitialLoad ? styles.fadeIn : ""}`}>
      <div className={styles.sidebar}>
        <LeftSidebar
          badgeSrc="/assets/DBJ-Logo.png"
          badgeAlt="Jake DBJ monogram"
          socials={SOCIAL_LINKS}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.backgroundLayer}>
          <motion.div
            className={styles.backgroundMotion}
            style={{
              x: prefersReducedMotion ? targetBackgroundX : backgroundSpring,
              scale: prefersReducedMotion ? 1 : 1.25,
            }}
          >
            <Image
              src={backgroundSrc}
              alt="Battlefield ambience"
              fill
              priority
              className={styles.backgroundImage}
            />
          </motion.div>
          <div className={styles.backgroundScrim} />
        </div>

        <div className={styles.navFrame}>
          <PrimaryNav items={PRIMARY_NAV_ITEMS} activeHref={pathname} />
        </div>

        <div className={styles.stage}>
          <TransitionErrorBoundary>
            <AnimatePresence
              mode="wait"
              custom={directionRef.current}
              initial={false}
              onExitComplete={handleExitComplete}
            >
              <motion.div
                key={transitionKey}
                custom={directionRef.current}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={styles.transitionLayer}
              >
                {/* Get content from map based on displayKey */}
                {/* When transitionKey changes, AnimatePresence triggers exit for old key */}
                {/* displayKey stays as old key during exit, so old content is shown */}
                {/* After exit completes, handleExitComplete updates displayKey to new key */}
                {contentMapRef.current.get(displayKey) ?? contentNode}
              </motion.div>
            </AnimatePresence>
          </TransitionErrorBoundary>
        </div>
      </div>
    </div>
  );
}
