"use client";
import React, { useEffect } from 'react';
import styles from './home.module.scss';
import Image from 'next/image';

const HomePageContent = () => {

	useEffect(() => {
		const handleMouseMove = (e) => {
			const tail = document.createElement("div");
			tail.className = styles.trail;
			tail.style.left = e.clientX + "px";
			tail.style.top = e.clientY + "px";
			document.body.appendChild(tail);

			// Fade out smoothly
			setTimeout(() => {
				tail.remove();
			}, 300); // duration of tail
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className='contain-fluid'>
			<div className={styles.hero_container}>
				<div className={styles.hero_content}>
					<h1>
						Hi, I’m
						<br /><span className={styles.hero_name}>Manoj Thapa</span><br />
						Front-End Developer & UI/UX Designer
					</h1>
					<p>
						Building modern websites with clean design and seamless user experiences.
					</p>
				</div>
				<div className={styles.hero_image}>
					<Image
						src="/images/manoj.png"
						alt="Hero Image"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
						className={styles.hero_img}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePageContent;
