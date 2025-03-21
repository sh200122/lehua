// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Board Customizer → Wheels*
 */
export interface BoardCustomizerDocumentDataWheelsItem {
  /**
   * Texture field in *Board Customizer → Wheels*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.wheels[].texture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  texture: prismic.ImageField<never>;

  /**
   * UID field in *Board Customizer → Wheels*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.wheels[].uid
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  uid: prismic.KeyTextField;
}

/**
 * Item in *Board Customizer → Decks*
 */
export interface BoardCustomizerDocumentDataDecksItem {
  /**
   * Texture field in *Board Customizer → Decks*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.decks[].texture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  texture: prismic.ImageField<never>;

  /**
   * UID field in *Board Customizer → Decks*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.decks[].uid
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  uid: prismic.KeyTextField;
}

/**
 * Item in *Board Customizer → Metals*
 */
export interface BoardCustomizerDocumentDataMetalsItem {
  /**
   * Color field in *Board Customizer → Metals*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.metals[].color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;

  /**
   * UID field in *Board Customizer → Metals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.metals[].uid
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  uid: prismic.KeyTextField;
}

/**
 * Content for Board Customizer documents
 */
interface BoardCustomizerDocumentData {
  /**
   * Wheels field in *Board Customizer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.wheels[]
   * - **Tab**: Wheels
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  wheels: prismic.GroupField<
    Simplify<BoardCustomizerDocumentDataWheelsItem>
  > /**
   * Decks field in *Board Customizer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.decks[]
   * - **Tab**: Decks
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  decks: prismic.GroupField<Simplify<BoardCustomizerDocumentDataDecksItem>> /**
   * Metals field in *Board Customizer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: board_customizer.metals[]
   * - **Tab**: Metals
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  metals: prismic.GroupField<Simplify<BoardCustomizerDocumentDataMetalsItem>>;
}

/**
 * Board Customizer document from Prismic
 *
 * - **API ID**: `board_customizer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BoardCustomizerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BoardCustomizerDocumentData>,
    "board_customizer",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | TeamGridSlice
  | VideoBlockSlice
  | TextAndImageSlice
  | ProductGridSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Setting → Navigation*
 */
export interface SettingDocumentDataNavigationItem {
  /**
   * Link field in *Setting → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Item in *Setting → Footer Skateboards*
 */
export interface SettingDocumentDataFooterSkateboardsItem {
  /**
   * Skateboard field in *Setting → Footer Skateboards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.footer_skateboards[].skateboard
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  skateboard: prismic.ImageField<never>;
}

/**
 * Content for Setting documents
 */
interface SettingDocumentData {
  /**
   * Site Title field in *Setting*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Descript field in *Setting*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.meta_descript
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_descript: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Setting*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Setting*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingDocumentDataNavigationItem>>;

  /**
   * Footer Image field in *Setting*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.footer_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  footer_image: prismic.ImageField<never>;

  /**
   * Footer Skateboards field in *Setting*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.footer_skateboards[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_skateboards: prismic.GroupField<
    Simplify<SettingDocumentDataFooterSkateboardsItem>
  >;
}

/**
 * Setting document from Prismic
 *
 * - **API ID**: `setting`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingDocumentData>,
    "setting",
    Lang
  >;

type SkateboardDocumentDataSlicesSlice = never;

/**
 * Content for Skateboard documents
 */
interface SkateboardDocumentData {
  /**
   * Name field in *Skateboard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Image field in *Skateboard*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Price (cents) field in *Skateboard*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Customizer Link field in *Skateboard*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.customizer_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  customizer_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Slice Zone field in *Skateboard*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SkateboardDocumentDataSlicesSlice> /**
   * Meta Title field in *Skateboard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: skateboard.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Skateboard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: skateboard.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Skateboard*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Skateboard document from Prismic
 *
 * - **API ID**: `skateboard`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkateboardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SkateboardDocumentData>,
    "skateboard",
    Lang
  >;

/**
 * Content for Skater documents
 */
interface SkaterDocumentData {
  /**
   * First Name field in *Skater*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.first_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Skater*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.last_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Photo Background field in *Skater*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.photo_background
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo_background: prismic.ImageField<never>;

  /**
   * Photo Foreground field in *Skater*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.photo_foreground
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo_foreground: prismic.ImageField<never>;

  /**
   * Customizer Link field in *Skater*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.customizer_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  customizer_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Skater document from Prismic
 *
 * - **API ID**: `skater`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkaterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SkaterDocumentData>, "skater", Lang>;

export type AllDocumentTypes =
  | BoardCustomizerDocument
  | HomepageDocument
  | SettingDocument
  | SkateboardDocument
  | SkaterDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Head field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Skateboard Deck Texture field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.skateboard_deck_texture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  skateboard_deck_texture: prismic.ImageField<never>;

  /**
   * Skateboard Wheel Texture field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.skateboard_wheel_texture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  skateboard_wheel_texture: prismic.ImageField<never>;

  /**
   * Skateboard Truck Color field in *Hero → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.skateboard_truck_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  skateboard_truck_color: prismic.ColorField;

  /**
   * Skateboard Bolt Color field in *Hero → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.skateboard_bolt_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  skateboard_bolt_color: prismic.ColorField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *ProductGrid → Default → Primary → Product*
 */
export interface ProductGridSliceDefaultPrimaryProductItem {
  /**
   * Skateboard field in *ProductGrid → Default → Primary → Product*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.product[].skateboard
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  skateboard: prismic.ContentRelationshipField<"skateboard">;
}

/**
 * Primary content in *ProductGrid → Default → Primary*
 */
export interface ProductGridSliceDefaultPrimary {
  /**
   * Heading field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Product field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.product[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product: prismic.GroupField<
    Simplify<ProductGridSliceDefaultPrimaryProductItem>
  >;
}

/**
 * Default variation for ProductGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductGrid*
 */
type ProductGridSliceVariation = ProductGridSliceDefault;

/**
 * ProductGrid Shared Slice
 *
 * - **API ID**: `product_grid`
 * - **Description**: ProductGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductGridSlice = prismic.SharedSlice<
  "product_grid",
  ProductGridSliceVariation
>;

/**
 * Primary content in *TeamGrid → Default → Primary*
 */
export interface TeamGridSliceDefaultPrimary {
  /**
   * Heading field in *TeamGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_grid.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Default variation for TeamGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TeamGrid*
 */
type TeamGridSliceVariation = TeamGridSliceDefault;

/**
 * TeamGrid Shared Slice
 *
 * - **API ID**: `team_grid`
 * - **Description**: TeamGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamGridSlice = prismic.SharedSlice<
  "team_grid",
  TeamGridSliceVariation
>;

/**
 * Primary content in *TextAndImage → Default → Primary*
 */
export interface TextAndImageSliceDefaultPrimary {
  /**
   * Heading field in *TextAndImage → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *TextAndImage → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *TextAndImage → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Background Image field in *TextAndImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Foreground Image field in *TextAndImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.default.primary.foreground_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foreground_image: prismic.ImageField<never>;

  /**
   * Theme field in *TextAndImage → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.default.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<"Blue" | "Orange" | "Navy" | "Lime">;
}

/**
 * Default variation for TextAndImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextAndImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextAndImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextAndImage → Image on Left → Primary*
 */
export interface TextAndImageSliceImageOnLeftPrimary {
  /**
   * Heading field in *TextAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.imageOnLeft.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *TextAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.imageOnLeft.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *TextAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.imageOnLeft.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Background Image field in *TextAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.imageOnLeft.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Foreground Image field in *TextAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.imageOnLeft.primary.foreground_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foreground_image: prismic.ImageField<never>;

  /**
   * Theme field in *TextAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_image.imageOnLeft.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<"Blue" | "Orange" | "Navy" | "Lime">;
}

/**
 * Image on Left variation for TextAndImage Slice
 *
 * - **API ID**: `imageOnLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextAndImageSliceImageOnLeft = prismic.SharedSliceVariation<
  "imageOnLeft",
  Simplify<TextAndImageSliceImageOnLeftPrimary>,
  never
>;

/**
 * Slice variation for *TextAndImage*
 */
type TextAndImageSliceVariation =
  | TextAndImageSliceDefault
  | TextAndImageSliceImageOnLeft;

/**
 * TextAndImage Shared Slice
 *
 * - **API ID**: `text_and_image`
 * - **Description**: TextAndImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextAndImageSlice = prismic.SharedSlice<
  "text_and_image",
  TextAndImageSliceVariation
>;

/**
 * Primary content in *VideoBlock → Default → Primary*
 */
export interface VideoBlockSliceDefaultPrimary {
  /**
   * YouTube Video ID field in *VideoBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.default.primary.youtube_video_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  youtube_video_id: prismic.KeyTextField;
}

/**
 * Default variation for VideoBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *VideoBlock*
 */
type VideoBlockSliceVariation = VideoBlockSliceDefault;

/**
 * VideoBlock Shared Slice
 *
 * - **API ID**: `video_block`
 * - **Description**: VideoBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSlice = prismic.SharedSlice<
  "video_block",
  VideoBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BoardCustomizerDocument,
      BoardCustomizerDocumentData,
      BoardCustomizerDocumentDataWheelsItem,
      BoardCustomizerDocumentDataDecksItem,
      BoardCustomizerDocumentDataMetalsItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingDocument,
      SettingDocumentData,
      SettingDocumentDataNavigationItem,
      SettingDocumentDataFooterSkateboardsItem,
      SkateboardDocument,
      SkateboardDocumentData,
      SkateboardDocumentDataSlicesSlice,
      SkaterDocument,
      SkaterDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProductGridSlice,
      ProductGridSliceDefaultPrimaryProductItem,
      ProductGridSliceDefaultPrimary,
      ProductGridSliceVariation,
      ProductGridSliceDefault,
      TeamGridSlice,
      TeamGridSliceDefaultPrimary,
      TeamGridSliceVariation,
      TeamGridSliceDefault,
      TextAndImageSlice,
      TextAndImageSliceDefaultPrimary,
      TextAndImageSliceImageOnLeftPrimary,
      TextAndImageSliceVariation,
      TextAndImageSliceDefault,
      TextAndImageSliceImageOnLeft,
      VideoBlockSlice,
      VideoBlockSliceDefaultPrimary,
      VideoBlockSliceVariation,
      VideoBlockSliceDefault,
    };
  }
}
