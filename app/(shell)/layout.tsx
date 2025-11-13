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

  const hasDataShellContent = (child: unknown): child is ReactElement<Record<string, unknown>> => {
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

  // Initialize state after mount to avoid SSR/client mismatch
  const [transitionState, setTransitionState] = useState<TransitionState>(() => ({
    current: { path: pathname, node: null },
    exiting: null,
    entering: null,
    direction: 1,
  }));

  // Initialize with actual content after mount (client-side only)
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    setTransitionState({
      current: { path: pathname, node: contentNode },
      exiting: null,
      entering: null,
      direction: 1,
    });
  }, []); // Only run once on mount

  const transitionDuration = prefersReducedMotion ? 0 : 0.7;
  const easing: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

  // Track entering path and node to ensure animation complete callback works
  const enteringPathRef = useRef<string | null>(null);
  const enteringNodeRef = useRef<ReactNode | null>(null);

  // Only trigger transitions on pathname changes, not on contentNode re-renders
  useEffect(() => {
    // Skip if not mounted yet (SSR)
    if (!isMounted) return;

    setTransitionState((prev) => {
      // Only update if pathname actually changed
      if (pathname === prev.current.path) {
        // If pathname matches but we're still transitioning, clear stuck state immediately
        // This ensures navigation can proceed even if transition is stuck
        if (prev.exiting || prev.entering) {
          enteringPathRef.current = null;
          return {
            ...prev,
            current: { path: pathname, node: contentNode },
            exiting: null,
            entering: null,
          };
        }
        // Update the node reference without triggering transition
        return {
          ...prev,
          current: { path: pathname, node: contentNode },
        };
      }

      // Pathname changed - start new transition
      // With mode="wait", set exiting first, entering will be set after exit completes
      const visible = prev.entering ?? prev.exiting ?? prev.current;
      enteringPathRef.current = pathname;
      enteringNodeRef.current = contentNode; // Store the new content node

      // Store the target pathname for after exit completes
      // Only set exiting, entering will be set in handleExitComplete
      return {
        current: { path: pathname, node: contentNode },
        exiting: visible,
        entering: null, // Will be set after exit completes
        direction: directionRef.current,
      };
    });
  }, [pathname, contentNode, isMounted]);

  const isTransitioning = Boolean(transitionState.exiting || transitionState.entering);

  // Safety timeout to clear stuck transition state
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (isTransitioning) {
      // Clear any existing timeout
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      // Set safety timeout: transition duration + buffer (2x duration for safety)
      const safetyTimeout = (transitionDuration * 1000) * 2 + 500;
      transitionTimeoutRef.current = setTimeout(() => {
        setTransitionState((prev) => {
          // Only clear if still transitioning (stuck state)
          if (prev.exiting || prev.entering) {
            console.warn("Transition timeout: clearing stuck transition state", {
              exiting: prev.exiting?.path,
              entering: prev.entering?.path,
              current: prev.current.path,
            });
            enteringPathRef.current = null;
            return {
              ...prev,
              exiting: null,
              entering: null,
            };
          }
          return prev;
        });
        transitionTimeoutRef.current = null;
      }, safetyTimeout);
    } else {
      // Clear timeout if not transitioning
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
    }
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [isTransitioning, transitionDuration]);

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
      transition: { duration: 0 }, // Immediate transition to initial state
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: "brightness(1)",
      transition: { 
        duration: transitionDuration, 
        ease: easing,
        // Ensure animation plays in production
        type: "tween",
      },
    },
  } as const;

  const handleExitComplete = () => {
    setTransitionState((prev) => {
      if (!prev.exiting) {
        return prev;
      }
      // Clear safety timeout when exit completes successfully
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
      // After exit completes, set entering state if we have a pending pathname change
      // This ensures the enter animation plays properly in production
      const pendingPath = enteringPathRef.current;
      const pendingNode = enteringNodeRef.current;
      if (pendingPath && pendingNode && pendingPath !== prev.current.path) {
        // Use the stored node for the pending path
        return {
          ...prev,
          exiting: null,
          entering: { path: pendingPath, node: pendingNode },
        };
      }
      return {
        ...prev,
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

        <div className={styles.navFrame}>
          <PrimaryNav items={PRIMARY_NAV_ITEMS} activeHref={pathname} />
        </div>

        <div className={styles.stage}>
          <TransitionErrorBoundary>
            <AnimatePresence
              mode="wait"
              custom={transitionState.direction}
              onExitComplete={handleExitComplete}
              initial={false}
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
                <motion.div
                  key={`enter-${transitionState.entering.path}`}
                  custom={transitionState.direction}
                  variants={enterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onAnimationStart={(definition) => {
                    // Ensure animation starts in production
                    if (definition === "animate") {
                      // Force a reflow to ensure animation plays
                      const element = document.querySelector(`[data-transition-key="enter-${transitionState.entering?.path}"]`);
                      if (element) {
                        (element as HTMLElement).offsetHeight; // Force reflow
                      }
                    }
                  }}
                  onAnimationComplete={(definition) => {
                    if (definition === "animate") {
                      // Fix: Use prev.entering and ref to ensure we clear the correct transition
                      setTransitionState((prev) => {
                        // Always clear entering state when animation completes
                        // This ensures transitions don't get stuck
                        if (prev.entering) {
                          enteringPathRef.current = null;
                          enteringNodeRef.current = null;
                          return { ...prev, entering: null };
                        }
                        return prev;
                      });
                    }
                  }}
                  data-transition-key={`enter-${transitionState.entering.path}`}
                  className={styles.transitionLayer}
                >
                  {transitionState.entering.node}
                </motion.div>
              ) : transitionState.current.node ? (
                <div key={`static-${transitionState.current.path}`} className={styles.transitionLayer}>
                  {transitionState.current.node}
                </div>
              ) : null}
            </AnimatePresence>
          </TransitionErrorBoundary>
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
