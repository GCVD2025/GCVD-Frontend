import ALLIcon from "@/components/icons/ALLIcon";
import BrandingIcon from "@/components/icons/BrandingIcon";
import GraphicIcon from "@/components/icons/GraphicIcon";
import UiuxIcon from "@/components/icons/UiuxIcon";
import IllustIcon from "@/components/icons/IllustIcon";
import EditorialIcon from "@/components/icons/EditorialIcon";
import MediaIcon from "@/components/icons/MediaIcon";
import ThreeDIcon from "@/components/icons/ThreeDIcon";
import GameIcon from "@/components/icons/GameIcon";

export interface CategoryItem {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  icon_color: string;
  queryKey: string;
}

export const categories: CategoryItem[] = [
  { label: "ALL", Icon: ALLIcon, icon_color: "#FF66A4", queryKey: "all" },
  {
    label: "Branding",
    Icon: BrandingIcon,
    icon_color: "#FFB297",
    queryKey: "branding",
  },
  {
    label: "Graphic",
    Icon: GraphicIcon,
    icon_color: "#FF66A4",
    queryKey: "graphic",
  },
  {
    label: "UI/UX",
    Icon: UiuxIcon,
    icon_color: "#8EA6F4",
    queryKey: "uiux",
  },
  {
    label: "Illust",
    Icon: IllustIcon,
    icon_color: "#FF8585",
    queryKey: "illust",
  },
  {
    label: "Editorial",
    Icon: EditorialIcon,
    icon_color: "#667CFF",
    queryKey: "editorial",
  },
  {
    label: "Media",
    Icon: MediaIcon,
    icon_color: "#FF92C4",
    queryKey: "media",
  },
  { label: "3D", Icon: ThreeDIcon, icon_color: "#70D8CE", queryKey: "3d" },
  { label: "Game", Icon: GameIcon, icon_color: "#8DC9F7", queryKey: "game" },
];

export const getCategoryByQueryKey = (
  queryKey: string
): CategoryItem | undefined => {
  return categories.find((category) => category.queryKey === queryKey);
};

export const getCategoriesByQueryKeys = (
  queryKeys: string[]
): CategoryItem[] => {
  return queryKeys
    .map((queryKey) => getCategoryByQueryKey(queryKey))
    .filter((category): category is CategoryItem => category !== undefined);
};
