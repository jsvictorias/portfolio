export default interface GrowAnsProps {
  /**
   * Receives a string (for example: 2s) that serves as the animation delay
   */
  delay: string;
  /**
   * Where the animation came from
   */
  variant: "right" | "front" | "fr";
  /**
   * How much things exists
   */
  numb?: string | number;
}
