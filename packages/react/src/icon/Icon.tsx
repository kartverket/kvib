/**Denne komponenten displayer ikoner fra material symbols rounded
 * https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded*/
export const Icon = ({
  icon,
  color,
}: {
  /**The icon from material symbols you want to display*/
  icon: string;
  /**The color of the icon*/
  color?: string;
}) => {
  return (
    <span className="material-symbols-rounded" style={{ color: color }}>
      {icon}
    </span>
  );
};
