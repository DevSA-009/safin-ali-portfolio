import { textTransType } from '@/utils/rich-text-utils';
import React from 'react';

export interface ProjectDataShortType {
	_id:string
	projectName: string;
	projectThumb: string;
	projectLiveURL: string;
	projectCodeURL: string;
	shortText: string;
};
export interface ProjectDataType extends ProjectDataShortType {
	projectOthersInfo: {
		challenges: string[];
		features: string[];
	};
	projectCategory: string[];
	projectTech: string[];
};

export interface SkillsTech {
	label:string,
	colorCSS:string
}

export interface SetListenerInRefArg {
	ref:HTMLElement;
	event:keyof DocumentEventMap;
	cb?:(e:unknown) => unknown;
	type?:'add' | 'remove';
}

export type SelectionOptionFieldValue = {
	readonly label:string,
	readonly value:unknown
}

export interface SelectionOptionFiedProps extends React.HTMLAttributes<HTMLUListElement> {
	options:SelectionOptionFieldValue[],
	selValue: Option,
	stateCb: (opt:Option) => any,
	icon?: JSX.Element,
	selContainer?: React.HTMLAttributes<HTMLDivElement>,
	selectedElement?: React.HTMLAttributes<HTMLDivElement>,
	itemElements?: React.LiHTMLAttributes<HTMLLIElement>
}