import type { ChildrenTypes, ClassNameTypes } from "@types/types.d";

export interface CardLayoutTypes extends ChildrenTypes, ClassNameTypes {
	onClick?: () => void;
}
