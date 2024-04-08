import { BoldItalicUnderlineToggles, CreateLink, InsertCodeBlock, UndoRedo } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
import React from 'react';

export default function Mdx_Editor_Tools () {

	return (
		<>
			<UndoRedo/>
			<BoldItalicUnderlineToggles/>
			<CreateLink/>
			<InsertCodeBlock/>
		</>
	);
}