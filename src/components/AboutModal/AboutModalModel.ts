/**
 * @file AboutModalModel.ts
 * @description Interface para os dados do Modal "Sobre Mim".
 */

/**
 * @interface AboutModalModel
 * @description Interface para os dados do Modal "Sobre Mim".
 */
export interface AboutModalModel {
  aboutText: string;
  isOpen: boolean;
  onClose: () => void;
}
