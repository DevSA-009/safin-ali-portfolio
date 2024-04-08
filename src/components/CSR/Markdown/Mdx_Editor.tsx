'use client';
import React, { useState } from 'react';
import { Mdx_Editor_Ref } from './Mdx_Editor_Ref';

export default function Mdx_Editor() {
	const [content, setContent] = useState(` `);

	const handleEditorChange = (value:string) => {
		setContent(value);
	};

	return (
		<div>
			<Mdx_Editor_Ref
				className={`dark_mdx_editor mdx_custom_theme`}
				contentEditableClassName={'mdx_content_editable'}
				markdown={content}
				onChange={ handleEditorChange }
			/>
		</div>
	);
}