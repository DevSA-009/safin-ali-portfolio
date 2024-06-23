'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import { IoIosList } from "react-icons/io";
import Search_Field from '../Field/Search_Field';
import Select_Option_Field from '../Field/Select_Option_Field';
import type { SelectionOptionFieldValue } from '@/types/types';

const optionsVal = [
	{
		label:'Latest',
		value:'latest'
	},
	{
		label:'Views',
		value:'views'
	},
	{
		label:'Star',
		value:'star'
	}
];

export default function Blogs_Headers() {

	const [selVal,setSelVal] = useState<SelectionOptionFieldValue>(optionsVal[0])

	return (
		<header className={ `blogs_header` }>
			{/* search bar */ }
			<div className={ `basis-1/2` }>
				<div className={ `w-3/5` }>
					<Search_Field
						placeholder={ 'search here...' }
					/>
				</div>
			</div>

			{/* new post button */ }
			<div className={ `flex items-center justify-evenly gap-x-5` }>
				<div className={ `primary_btn inline-flex items-center gap-x-3` }>
					<span className={ `inline-block` }><GoPlusCircle size={ 20 } /></span>
					<Link
						href={ '/blogs/newpost' }
						className={ `inline-block` }
					>
						New Blog
					</Link>
				</div>
				<div>
					<div>
						<div>
							<Select_Option_Field
								selValue={selVal}
								stateCb={(val) => setSelVal(val)}
								selContainer={
									{
										className: `border rounded-lg px-3 py-2 border-primary-border bg-white/5 hover:bg-white/15 duration-150`,
									}
								}
								icon={ <IoIosList size={ 20 } /> }
								options={ optionsVal }
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}