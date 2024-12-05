declare module 'react-vertical-timeline-component' {
  export const VerticalTimeline: React.FC<{
    children: React.ReactNode;
    className?: string;
    layout?: '1-column' | '2-columns';
    lineColor?: string;
    animate?: boolean;
  }>;

  export const VerticalTimelineElement: React.FC<{
    children: React.ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    visible?: boolean;
  }>;
}

declare module 'react-vertical-timeline-component/style.min.css'; 