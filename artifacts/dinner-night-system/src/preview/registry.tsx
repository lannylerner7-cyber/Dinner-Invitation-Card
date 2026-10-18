import { lazy, type ComponentType } from 'react';
import { OverviewPage, ColorsPage, FontsPage, LayoutPage } from './foundations';
export type PreviewEntry={id:string;name:string;description:string;Page:ComponentType};
export type NavGroup={name:string;entries:PreviewEntry[]};
export const DESIGN_SYSTEM={title:'Dinner Night Design System',description:'Parchment warmth, expressive serif type, and intimate invitation details.'};
export const OVERVIEW_ENTRY:PreviewEntry={id:'overview',name:'Overview',description:'Extracted from Dinner Night Invitation',Page:OverviewPage};
export const NAV_GROUPS:NavGroup[]=[
{name:'Colors',entries:[{id:'colors',name:'Palette & themes',description:'Source colors and derived dark theme',Page:ColorsPage}]},
{name:'Fonts',entries:[{id:'fonts',name:'Typography',description:'Georgia and Trebuchet MS',Page:FontsPage}]},
{name:'Layout',entries:[{id:'layout',name:'Spacing & surfaces',description:'Compact card geometry and motion',Page:LayoutPage}]},
{name:'Components',entries:[
{id:'card',name:'Invitation card',description:'Compact parchment surface',Page:lazy(()=>import('./demos/invitation-card'))},
{id:'text',name:'Invitation typography',description:'Heading and six text treatments',Page:lazy(()=>import('./demos/invitation-text'))},
{id:'link',name:'Invitation link',description:'Native link, hover and keyboard focus',Page:lazy(()=>import('./demos/invitation-link'))}]}];
export const ALL_ENTRIES=[OVERVIEW_ENTRY,...NAV_GROUPS.flatMap(g=>g.entries)];
