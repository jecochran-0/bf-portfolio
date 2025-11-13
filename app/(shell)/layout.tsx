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

import { LeftSidebar, EnvelopeIcon } from "../components/LeftSidebar/LeftSidebar";
import { PrimaryNav } from "../components/PrimaryNav/PrimaryNav";
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
    icon: <Image src="/assets/x-icon.png" alt="X icon" width={34} height={34} />,
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
      const selected = BACKGROUND_SOURCES[Math.floor(Math.random() * BACKGROUND_SOURCES.length)];
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

  const contentNode =
     childArray.find((child): child is ReactElement =>
       isValidElement(child) && child.props?.["data-shell-content"]
     ) ??
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
     const pathMatch = PRIMARY_NAV_ITEMS.find((item) => pathname.startsWith(item.href));
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

  const pageVariants = {
    initial: (dir: number) =>
      prefersReducedMotion
        ? { opacity: 1, x: 0, filter: "brightness(1)" }
        : { opacity: 0, x: dir * 140, filter: "brightness(1.05)" },
    animate: { opacity: 1, x: 0, filter: "brightness(1)" },
    exit: (dir: number) =>
      prefersReducedMotion
        ? { opacity: 1, x: 0, filter: "brightness(1)" }
        : { opacity: 0, x: -dir * 140, filter: "brightness(0.65)" },
  } as const;

  const pageTransition = {
    duration: prefersReducedMotion ? 0 : 0.62,
    ease: [0.25, 0.8, 0.25, 1],
  } as const;
 
  const animationDurationMs = pageTransition.duration * 1000;

  const [transitionState, setTransitionState] = useState<TransitionState>(() => ({
    current: memoContent,
    exiting: null,
    entering: null,
    direction: 1,
  }));

  useEffect(() => {
    setTransitionState((prev) => {
      if (memoContent.path === prev.current.path) {
        return prev;
      }

      const visible = prev.entering ?? prev.exiting ?? prev.current;

      return {
        current: memoContent,
        exiting: visible,
        entering: null,
        direction: directionRef.current,
      };
    });
  }, [memoContent]);

  const isTransitioning = Boolean(transitionState.exiting || transitionState.entering);

  const transitionDuration = prefersReducedMotion ? 0 : 0.7;
  const easing: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

  const exitVariants = {
    present: { opacity: 1, x: 0, filter: "brightness(1)" },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir * -150,
      filter: "brightness(0.6)",
      transition: { duration: transitionDuration, ease: easing },
    }),
  } as const;

  const enterVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir * 150,
      filter: "brightness(1.08)",
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: "brightness(1)",
      transition: { duration: transitionDuration, ease: easing },
    },
  } as const;

  const handleExitComplete = () => {
    setTransitionState((prev) => {
      if (!prev.exiting) {
        return prev;
      }
      return {
        ...prev,
        entering: prev.current,
        exiting: null,
      };
    });
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

        <div
          className={styles.navFrame}
          style={{ pointerEvents: isTransitioning ? "none" : "auto" }}
        >
          <PrimaryNav items={PRIMARY_NAV_ITEMS} activeHref={pathname} />
        </div>

        <div className={styles.stage}>
          <AnimatePresence
            mode="wait"
            custom={transitionState.direction}
            onExitComplete={handleExitComplete}
          >
            {transitionState.exiting ? (
              <motion.div
                key={`exit-${transitionState.exiting.path}`}
                custom={transitionState.direction}
                variants={exitVariants}
                initial="present"
                animate="present"
                exit="exit"
                className={styles.transitionLayer}
              >
                {transitionState.exiting.node}
              </motion.div>
            ) : transitionState.entering ? (
              (() => {
                const enteringPath = transitionState.entering?.path;
                return (
              <motion.div
                key={`enter-${transitionState.entering.path}`}
                custom={transitionState.direction}
                variants={enterVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={(definition) => {
                  if (definition === "animate" && enteringPath) {
                    setTransitionState((prev) =>
                      prev.entering && prev.entering.path === enteringPath
                        ? { ...prev, entering: null }
                        : prev
                    );
                  }
                }}
                className={styles.transitionLayer}
              >
                {transitionState.entering.node}
              </motion.div>
                );
              })()
            ) : (
              <div key={`static-${transitionState.current.path}`} className={styles.transitionLayer}>
                {transitionState.current.node}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

type TransitionState = {
  current: ContentItem;
  exiting: ContentItem | null;
  entering: ContentItem | null;
  direction: number;
};

type ContentItem = {
  path: string;
  node: ReactNode;
};
