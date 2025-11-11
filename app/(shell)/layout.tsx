"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
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
    href: "https://www.linkedin.com/in/jake",
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
    href: "https://twitter.com",
    label: "X",
    icon: <Image src="/assets/x-icon.png" alt="X icon" width={34} height={34} />,
    external: true,
  },
  {
    href: "mailto:hello@jake.dev",
    label: "Email",
    icon: <EnvelopeIcon />,
  },
];

type ShellLayoutProps = {
  children: ReactNode;
};

export default function ShellLayout({ children }: ShellLayoutProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const [backgroundSrc] = useState(() =>
    BACKGROUND_SOURCES[Math.floor(Math.random() * BACKGROUND_SOURCES.length)]
  );

  const childArray = Children.toArray(children);

  const contentNode =
    childArray.find((child): child is ReactElement =>
      isValidElement(child) && child.props?.["data-shell-content"]
    ) ??
    (isValidElement(children) ? (children as ReactElement) : <>{children}</>);

  const memoContent = useMemo(() => ({ path: pathname, node: contentNode }), [pathname]);

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

  const [transitionState, setTransitionState] = useState<TransitionState>(() => ({
    current: memoContent,
    exiting: null,
    direction: 1,
    entering: null,
  }));

  useEffect(() => {
    setTransitionState((prev) => {
      if (memoContent.path === prev.current.path) {
        return prev;
      }
      return {
        current: memoContent,
        exiting: prev.current,
        entering: null,
        direction: directionRef.current,
      };
    });
  }, [memoContent]);

  const isAnimating = Boolean(transitionState.exiting || transitionState.entering);

  const transitionDuration = prefersReducedMotion ? 0 : 0.95;
  const easing: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

  const exitVariants = {
    present: { opacity: 1, x: 0, filter: "brightness(1)" },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir * -160,
      filter: "brightness(0.6)",
      transition: { duration: transitionDuration, ease: easing },
    }),
  } as const;

  const enterVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir * 160,
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
      if (!prev.entering && prev.exiting) {
        return {
          ...prev,
          entering: prev.current,
          exiting: null,
        };
      }
      return prev;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <LeftSidebar
          badgeSrc="/assets/DBJ-Logo.png"
          badgeAlt="Jake DBJ monogram"
          socials={SOCIAL_LINKS}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.backgroundLayer}>
          <Image
            src={backgroundSrc}
            alt="Battlefield ambience"
            fill
            priority
            className={styles.backgroundImage}
          />
          <div className={styles.backgroundScrim} />
        </div>

        <div
          className={styles.navFrame}
          style={{ pointerEvents: isAnimating ? "none" : "auto" }}
        >
          <PrimaryNav items={PRIMARY_NAV_ITEMS} activeHref={pathname} />
        </div>

        <div className={styles.stage}>
          <AnimatePresence
            initial={false}
            mode="wait"
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
              <motion.div
                key={`enter-${transitionState.entering.path}`}
                custom={transitionState.direction}
                variants={enterVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={() =>
                  setTransitionState((prev) =>
                    prev.entering ? { ...prev, entering: null } : prev
                  )
                }
                className={styles.transitionLayer}
              >
                {transitionState.entering.node}
              </motion.div>
            ) : (
              <motion.div
                key={`static-${transitionState.current.path}`}
                className={styles.transitionLayer}
              >
                {transitionState.current.node}
              </motion.div>
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
  direction: number;
  entering: ContentItem | null;
};

type ContentItem = {
  path: string;
  node: ReactNode;
};
