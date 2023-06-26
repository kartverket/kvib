/**Denne komponenten displayer ikoner fra material symbols rounded
 * https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded*/

export const Icon = ({
  icon,
  size = 24,
  color = "black",
  weight = 600,
  grade = 0,
  isFilled = false,
}: {
  /**The icon from Material symbols you want to display*/
  icon: string;
  /**The font size of the icon */
  size?: number;
  /**The color of the icon*/
  color?: string;
  /**The weight of the icon*/
  weight?: number;
  /**The of grade the icon*/
  grade?: number;
  /**Decides whether the icon is filled or not*/
  isFilled?: boolean;
}) => {
  return (
    <span
      className="material-symbols-rounded"
      style={{
        fontSize: size,
        color: color,
        fontVariationSettings: `'FILL' ${isFilled ? 1 : 0}, 'wght' ${weight ? weight : 600}, 'GRAD' ${
          grade ? grade : 0
        }`,
      }}
    >
      {icon}
    </span>
  );
};
