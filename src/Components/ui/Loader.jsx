import { cn } from "../lib/utils";

/**
 * @typedef {Object} LoaderProps
 * @property {number} [height]
 * @property {number} [width]
 * @property {'default'|'primary'|'secondary'} [variant]
 * @property {string} [className]
 */

/**
 * @param {LoaderProps} props
 */
const Loader = ({ height = 6, width = 6, variant = "default", className }) => {
  /**
   * Active background color for:
   * default = '#1a1a1a'
   * primary and secondary = '#ffffff'
   */
  const activeBgColor =
    variant === "default"
      ? "[--loader-active-bg:#1a1a1a]"
      : "[--loader-active-bg:#ffffff]";
  /**
   * Background color for:
   * default = '#808080'
   * primary and secondary = '#ffffff' with 50% opacity
   */
  const bgColor =
    variant === "default" ? "[--loader-bg:#808080]" : "[--loader-bg:#ffffff80]";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn("loader-dot", activeBgColor, bgColor)}
        style={{ height, width }}
      />
      <div
        className={cn("loader-dot", activeBgColor, bgColor)}
        style={{ height, width }}
      />
      <div
        className={cn("loader-dot", activeBgColor, bgColor)}
        style={{ height, width }}
      />
    </div>
  );
};

export default Loader;
