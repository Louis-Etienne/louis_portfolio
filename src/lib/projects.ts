import apagosMenu from "@/data/Apagos/g1.png";
import apagosBoard from "@/data/Apagos/g2.png";
import apagosBoard2 from "@/data/Apagos/g3.png";
import apagosRules from "@/data/Apagos/g4.png";
import apagosSettings from "@/data/Apagos/g5.PNG";
import notasandboxSketch from "@/data/NotASandbox/Epson_021620231612061514.jpg";
import notasandboxUI from "@/data/NotASandbox/notasandbox.png";
import notasandboxCollision from "@/data/NotASandbox/movie_013.mp4";
import notasandboxFluid from "@/data/NotASandbox/movie_015.mp4";
import notasandboxFullDemo from "@/data/NotASandbox/movie_016.mp4"
import notasandboxSoftBodies from "@/data/NotASandbox/movie_017.mp4"
import freeCarveLogo from "@/data/FreeCarve/freecarve2.svg";
import freeCarveVideo from "@/data/FreeCarve/video_freecarve.mp4";
import blackjackcoop1 from "@/data/BlackJackCoop/Screenshot (152).png";
import blackjackcoop2 from "@/data/BlackJackCoop/Screenshot (155).png";
import blackjackcoop3 from "@/data/BlackJackCoop/Screenshot (156).png";
import blackjackcoop4 from "@/data/BlackJackCoop/Screenshot (158).png";
import blackjackcoop5 from "@/data/BlackJackCoop/Screenshot (159).png";
import blackjackcoop6 from "@/data/BlackJackCoop/Screenshot (163).png";
import blackjackcoopServer1 from "@/data/BlackJackCoop/SERVER.png";
import blackjackcoopServer2 from "@/data/BlackJackCoop/Server2.png";
import programmer101Demo from "@/data/Programmer101/2023-12-27 15-04-07.mp4";
import programmer101_1 from "@/data/Programmer101/gameplay.png"
import programmer101_2 from "@/data/Programmer101/gameplay2.jpg"
import programmer101_3 from "@/data/Programmer101/gameplay3.jpg"
import programmer101_4 from "@/data/Programmer101/gameplay4.jpg"
import programmer101_5 from "@/data/Programmer101/gameplay5.jpg"
import theGamePlay from "@/data/TheGame/s1.jpg";
import theGameOver from "@/data/TheGame/s2.jpg";
import theGameSettings from "@/data/TheGame/s3.jpg";
import theGameSkins from "@/data/TheGame/s4.jpg";
import theGameMenu from "@/data/TheGame/s5.jpg";
import nba2kDemo from "@/data/NBA2K2020/2023-12-27 15-29-27.mp4";
import nba2kMenu from "@/data/NBA2K2020/gameplay1.jpg";
import nba2kGameplay from "@/data/NBA2K2020/gameplay2.jpg";
import boringRpgClass from "@/data/ABoringRPG/classSelection.PNG";
import boringRpgMap from "@/data/ABoringRPG/gameInfo.png";
import boringRpgStats from "@/data/ABoringRPG/gameInfo2.PNG";
import boringRpgInventory from "@/data/ABoringRPG/gameInfo3.PNG";
import boringRpgCombatMenu from "@/data/ABoringRPG/gameInfo4.PNG";
import boringRpgDungeon from "@/data/ABoringRPG/GamePlay.png";
import boringRpgFight from "@/data/ABoringRPG/GamePlay2.png";
import boringRpgEvent from "@/data/ABoringRPG/Gameplay3.png";
import boringRpgItem from "@/data/ABoringRPG/Gameplay4.png";
import boringRpgArmor from "@/data/ABoringRPG/Gameplay5.png";
import boringRpgLevelUp from "@/data/ABoringRPG/Gameplay6.png";
import boringRpgBoss from "@/data/ABoringRPG/Gameplay7.png";
import testingDirectXDemo from "@/data/TestingDirectX/video_testingdirectx11_1.mp4";
import auditoLogo from "@/data/Audito/audito_logo.svg";
import auditoDemo1 from "@/data/Audito/audito_1.webm";
import auditoDemo2 from "@/data/Audito/audito_2.mp4";
import louisMenagerieHome from "@/data/LouisMenagerie/louismenagerie1.png";
import consoleSnakeDemo from "@/data/ConsoleSnake/2023-12-27 16-27-09.mp4";
import consoleSnakePlay from "@/data/ConsoleSnake/g3.png";
import consoleSnakeLose from "@/data/ConsoleSnake/g4.PNG";
import calculatorWelcome from "@/data/Calculator/Capture.PNG";
import hangmanPlay from "@/data/Hangman/Hangman2.png";
import servyPhoto from "@/data/Servy/servy.jpg";
import xpportfolio from "@/data/XpPortfolio/Screenshot from 2026-10-12 18-13-01.png"

import type { FileRoutesByTo } from "@/routeTree.gen";

export type ProjectRoute = Extract<
	keyof FileRoutesByTo,
	`/projects/${string}/${string}`
>;

export type CategoryId =
	| "games"
	| "softwares"
	| "websites"
	| "console"
	| "hardware";

export interface Category {
	id: CategoryId;
	label: string;
	description: string;
}

export type ProjectMedia =
	| { type: "image"; src: string; alt: string; caption?: string }
	| {
			type: "video";
			src: string;
			alt: string;
			caption?: string;
			poster?: string;
	  };

export interface Project {
	to: ProjectRoute;
	title: string;
	category: CategoryId;
	tagline: string;
	summary: string[];
	learned?: string[];
	tech: string[];
	context?: string;
	status: "personnal" | "school" | "in-progress";
	year: string;
	media?: ProjectMedia[];
}

export const categories: Category[] = [
	{
		id: "softwares",
		label: "Software",
		description:
			"Desktop tools, graphics experiments and engineering projects.",
	},
	{
		id: "games",
		label: "Games",
		description:
			"Board games, RPGs, physics sandboxes and other playable things.",
	},
	{
		id: "websites",
		label: "Websites",
		description: "Things that live in a browser, including this one.",
	},
	{
		id: "console",
		label: "Console Apps",
		description: "Where it all began: tiny C# programs in a black window.",
	},
	{
		id: "hardware",
		label: "Hardware",
		description: "Projects with cables, screws and blinking lights.",
	},
];

export const projects: Project[] = [
	
	{
		to: "/projects/softwares/TestingDirectX11",
		title: "Testing DirectX11",
		category: "softwares",
		tagline: "Tests! Woohoo!",
		status: "personnal",
		year: "2021",
		tech: ["C++", "DirectX 11", "Win32", "HLSL"],
		summary: [
			"A testing ground for the DirectX 11 API: a scene where a free camera navigates a 3D environment to observe different rendering phenomena, written with nothing but DirectX 11 and Win32.",
		],
		learned: [
			"The math behind computer graphics: matrices, vertices, indices, normals and the rendering pipeline.",
		],
		media: [
			{ type: "video", src: testingDirectXDemo, alt: "DirectX 11 scene demo" },
		],
	},
	{
		to: "/projects/softwares/FreeCarve",
		title: "Free Carve",
		category: "softwares",
		tagline: "Free is good, nothing is better than free",
		context: "Software Engineering class",
		status: "school",
		year: "2024",
		media: [
			{ type: "image", src: freeCarveLogo, alt: "Free Carve logo" },
			{ type: "video", src: freeCarveVideo, alt: "Free Carve demo" },
		],
		tech: ["Java", "Swing", "GCODE", "GRASP"],
		summary: [
			"A GCODE generator for CNC machines that emulates a panel saw, with a user friendly UI designed by the team.",
		],
		learned: [
			"The WHY of object oriented programming through the GRASP principles: low coupling, high cohesion, protected variations and friends.",
		],
	},
	{
		to: "/projects/softwares/Audito",
		title: "Audito",
		category: "softwares",
		tagline: "Share audio with friends!",
		status: "personnal",
		year: "2025",
		tech: ["WebRTC", "Heroku", "Audio", "JavaScript"],
		summary: [
			"A little WebRTC (Web Real-Time Communication) frontend and backend to allow friends to connect and share audio through multiple computers. The project was born out of the desire to listen to a show with a friend of mine in a crowded space without sharing headphones.",
		],
		media: [
			{ type: "image", src: auditoLogo, alt: "Audito logo" },
			{ type: "video", src: auditoDemo1, alt: "Audito demo" },
			{ type: "video", src: auditoDemo2, alt: "Audito demo" },
		],
	},
	{
		to: "/projects/softwares/NotDiscord",
		title: "Not Discord",
		category: "softwares",
		tagline: "Write-up coming soon",
		status: "in-progress",
		year: "2026",
		tech: [],
		summary: [
			"The page for this project is still being written. Check back soon!",
		],
	},
	{
		to: "/projects/games/NotASandbox",
		title: "Not A Sandbox",
		category: "games",
		tagline: "Is it a sandbox? Or not?",
		context: "CEGEP group project",
		status: "school",
		year: "2023",
		tech: ["C#", "2D physics", "Rigid bodies", "Soft bodies", "Unity"],
		summary: [
			"A sandbox interface that emulates the basics of Dynamics, the physics of forces and motion, from scratch in 2D. The goal was to deepen our understanding of Newtonian physics by building our own 2D physics engine.",
			"Beyond fixed-timestep motion, rotational dynamics, collision detection/solving and friction, the team found time for more exotic features: joints, fluid dynamics, soft bodies and a mesh builder.",
		],
		learned: [
			"Leading a team: drafting the schematics and building the foundation of the framework as the unofficial project director.",
			"There is waaaay more to Dynamics than acceleration and speed.",
			"Collision detection and simulated timesteps",
			"Fluid dynamics"
		],
		media: [
			{ type: "image", src: notasandboxSketch, alt: "Initial drafts of NotASandbox" },
			{ type: "image", src: notasandboxUI, alt: "User Interface of NotASandbox"},
			{ type: "video", src: notasandboxCollision, alt: "Rigid collisions example", caption: "Rigid collisions example"},
			{type: "video", src: notasandboxFluid, alt: "Fluid simulation", caption: "Fluid simulation"},
			{type: "video", src: notasandboxFullDemo, alt: "Rigid bodies demo", caption: "Rigid bodies demo"},
			{type: "video", src: notasandboxSoftBodies, alt: "Soft bodies demo", caption: "Soft bodies demo"}
		],
	},
	{
		to: "/projects/games/BlackjackCoop",
		title: "BlackJack Coop",
		category: "games",
		tagline: "Black Jack, but, like, coop…",
		status: "personnal",
		year: "2021",
		tech: ["Qt", "C++", "TCP networking", "Client/Server", "Gimp for the artwork"],
		summary: [
			"A cooperative BlackJack game where people from around the globe play together against a dealer bot that peeks through the deck to optimise its draws.",
			"Turn by turn, players Hit, Stand or Double Down, see each other's cards and choose how many tokens to bet.",
		],
		learned: [
			"Networking is haaaard: multiplayer forces you to rethink the whole architecture of an application.",
			"Server logs are an underrated debugging superpower.",
		],
		media: [
			{type: "image", src: blackjackcoop1, alt: "Main menu"},
			{type: "image", src: blackjackcoop2, alt: "Join room menu"},
			{type: "image", src: blackjackcoop3, alt: "Lobby"},
			{type: "image", src: blackjackcoop4, alt: "Main game interface"},
			{type: "image", src: blackjackcoop5, alt: "Dealer"},
			{type: "image", src: blackjackcoop6, alt: "Gameplay"},
			{type: "image", src: blackjackcoopServer1, alt: "Server logger"},
			{type: "image", src: blackjackcoopServer2, alt: "Other server logger"}
		]
	},
	{
		to: "/projects/games/Programmer101",
		title: "Programmer 101",
		category: "games",
		tagline: "This project is weird",
		context: "Final IB project of high school",
		status: "school",
		year: "2020",
		tech: ["Processing", "Custom language", "Game design"],
		summary: [
			"A learning game that guides the player through the fundamentals of programming, in French. Ten levels where you complete tasks by writing code in a homemade language, inside a homemade editor.",
			"The levels slowly introduce variables, functions, conditionals and loops.",
		],
		learned: [
			"Thinking like a compiler: writing a parser that fragments code and executes it by a well defined priority list.",
			"Designing a learning curve for complete newcomers.",
			"Designing my own Processing animation library"
		],
		media: [
			{type: "video", src: programmer101Demo, alt: "Demo of Programmer101"},
			{type: "image", src: programmer101_1, alt: "Gameplay image"},
			{type: "image", src: programmer101_2, alt: "Gameplay image"},
			{type: "image", src: programmer101_3, alt: "Gameplay image"},
			{type: "image", src: programmer101_4, alt: "Gameplay image"},
			{type: "image", src: programmer101_5, alt: "Gameplay image"},
		]
	},
	{
		to: "/projects/games/TheGame",
		title: "The Game",
		category: "games",
		tagline: "Incredible name for a game!",
		context: "CEGEP team project",
		status: "school",
		year: "2022",
		tech: ["Android Studio", "Java", "Gimp", "Bosca Ceoil"],
		summary: [
			"A simple mobile game: dodge the falling blocks, collect coins and spend them on skins. Includes a highscore system saved on the phone.",
		],
		learned: [
			"Bending Android Studio's event-based architecture into a proper game loop.",
		],
		media: [
			{ type: "image", src: theGameMenu, alt: "Main menu of The Game" },
			{ type: "image", src: theGamePlay, alt: "Dodging falling blocks" },
			{ type: "image", src: theGameOver, alt: "Game over screen" },
			{ type: "image", src: theGameSkins, alt: "Skin selection" },
			{ type: "image", src: theGameSettings, alt: "Sound settings" },
		],
	},
	{
		to: "/projects/games/Apagos",
		title: "Apagos",
		category: "games",
		tagline: "Computer board game!!",
		status: "school",
		year: "2022",
		media: [
			{ type: "image", src: apagosMenu, alt: "Menu screen of Apagos" },
			{ type: "image", src: apagosBoard, alt: "Board of Apagos" },
			{ type: "image", src: apagosBoard2, alt: "Board of Apagos, mid-game" },
			{ type: "image", src: apagosRules, alt: "Rules of Apagos" },
			{ type: "image", src: apagosSettings, alt: "Settings of Apagos" },
		],
		tech: ["Qt", "C++", "Drag and drop"],
		summary: [
			"A fully functional recreation of the Apagos board game built with the Qt API, with animations, drag and drop and couch multiplayer.",
		],
	},
	{
		to: "/projects/games/Nba2k",
		title: "N-B-A 2k20",
		category: "games",
		tagline: "2K don't sue me please",
		status: "personnal",
		year: "2019",
		tech: ["Processing", "Box2D"],
		summary: [
			"A little minigame where you shoot a ball through a hoop, using Processing as a game engine and Box2D to compute the 2D physics.",
		],
		learned: [
			"Using libraries! Box2D was the first big library I used instead of programming everything from scratch.",
		],
		media: [
			{ type: "image", src: nba2kMenu, alt: "Main menu of N-B-A 2k20" },
			{ type: "image", src: nba2kGameplay, alt: "Shooting balls at the hoop" },
			{ type: "video", src: nba2kDemo, alt: "N-B-A 2k20 demo", caption: "Gameplay demo" },
		],
	},
	{
		to: "/projects/games/TheBoringRPG",
		title: "The Boring RPG",
		category: "games",
		tagline: "Yeah, the game isn't thrilling",
		status: "personnal",
		year: "2020",
		tech: ["Processing", "Gimp", "Procedural generation"],
		summary: [
			"A mix of Pokémon and a randomly generated dungeon crawler. Pick a class, enter a dungeon with multiple stages and move room to room meeting enemies, loot, shops, events and a boss at each stage.",
		],
		learned: [
			"Making content is hard: engaging content for a whole game takes far more effort than the systems behind it.",
		],
		media: [
			{ type: "image", src: boringRpgClass, alt: "Choosing a class" },
			{ type: "image", src: boringRpgMap, alt: "Dungeon map legend" },
			{ type: "image", src: boringRpgStats, alt: "Stats and equipment" },
			{ type: "image", src: boringRpgInventory, alt: "Inventory tutorial" },
			{ type: "image", src: boringRpgCombatMenu, alt: "Combat menu" },
			{ type: "image", src: boringRpgDungeon, alt: "Dungeon room" },
			{ type: "image", src: boringRpgFight, alt: "Fighting an enemy" },
			{ type: "image", src: boringRpgEvent, alt: "A room event" },
			{ type: "image", src: boringRpgItem, alt: "Inspecting a rusted sword" },
			{ type: "image", src: boringRpgArmor, alt: "Inspecting old chainmail" },
			{ type: "image", src: boringRpgLevelUp, alt: "Leveling up abilities" },
			{ type: "image", src: boringRpgBoss, alt: "Boss fight" },
		],
	},
	{
		to: "/projects/websites/XPPortfolio",
		title: "XP Portfolio",
		category: "websites",
		tagline: "XP is nostalgic",
		status: "personnal",
		year: "2026",
		tech: ["React", "TanStack Start", "Tailwind CSS", "shadcn/ui", "Cursor"],
		summary: [
			"This very website: a Windows XP inspired desktop with an animated Bliss wallpaper, a working Start menu and a papyrus-aged Internet Explorer to browse the projects.",
		],
		media: [
			{type: "image", src: xpportfolio, alt: "This very website"}
		]
	},
	{
		to: "/projects/websites/LouisMenagerie",
		title: "Louis' Menagerie",
		category: "websites",
		tagline: "The previous version of this portfolio",
		status: "personnal",
		year: "2023",
		tech: ["React", "React Router", "Express"],
		summary: [
			"A simple website acting as a platform to share my weird projects and doubling as a portfolio. Its layout was heavily inspired by the React Router documentation.",
			"My first real experience with web development.",
		],
		media: [
			{ type: "image", src: louisMenagerieHome, alt: "Louis' Menagerie homepage" },
		],
	},
	{
		to: "/projects/console/ConsoleSnake",
		title: "Snake!!",
		category: "console",
		tagline: "Every programmer eventually makes this game :)",
		status: "personnal",
		year: "2019",
		tech: ["C#", ".NET", "Visual Studio"],
		summary: [
			"A recreation of Snake where the snake collects apples without hitting itself or the walls — rendered entirely with ASCII characters in the console.",
		],
		media: [
			{ type: "image", src: consoleSnakePlay, alt: "Snake moving toward an apple" },
			{ type: "image", src: consoleSnakeLose, alt: "You lose screen" },
			{ type: "video", src: consoleSnakeDemo, alt: "Snake demo", caption: "Gameplay demo" },
		],
	},
	{
		to: "/projects/console/ConsoleCalculator",
		title: "Calculator",
		category: "console",
		tagline: "Do I really need to describe what a calculator is?",
		status: "personnal",
		year: "2018",
		tech: ["C#", ".NET", "Parsing"],
		summary: [
			"The FIRST fully functional program I ever made: a single line text parser that does math in the console, supporting + − × ÷, parentheses and the standard order of operations.",
		],
		media: [
			{ type: "image", src: calculatorWelcome, alt: "Calculator welcome screen" },
		],
	},
	{
		to: "/projects/console/ConsoleHangman",
		title: "Hangman",
		category: "console",
		tagline: "Save the poor guy!",
		status: "personnal",
		year: "2018",
		tech: ["C#", ".NET"],
		summary: [
			"A little console game where you guess the unknown word letter by letter. Every wrong guess gives the hangman one more limb.",
		],
		media: [
			{ type: "image", src: hangmanPlay, alt: "Guessing letters in the console" },
		],
	},
	{
		to: "/projects/hardware/Servy",
		title: "Servy",
		category: "hardware",
		tagline: "My very own server",
		status: "personnal",
		year: "2026",
		tech: ["Coolify", "Routing", "VPN", "Server", "Linux"],
		summary: [
			"A very simple headless ubuntu server running my projects, including this webpage.",
			"The stack runs a Coolify instance to launch docker services easily.",
			"I named him Servy because he is very dear to me."
		],
		media: [
			{ type: "image", src: servyPhoto, alt: "Servy, a small ThinkCentre computer" },
		],
	},
];

export function getProject(to: string) {
	return projects.find((project) => project.to === to);
}

export function getCategory(id: CategoryId) {
	return categories.find((category) => category.id === id) as Category;
}

export function projectsIn(category: CategoryId) {
	return projects.filter((project) => project.category === category);
}

export function searchProjects(query: string) {
	const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
	if (terms.length === 0) return projects;
	return projects.filter((project) => {
		const haystack = [
			project.title,
			project.tagline,
			getCategory(project.category).label,
			project.year,
			...project.tech,
			...project.summary,
		]
			.join(" ")
			.toLowerCase();
		return terms.every((term) => haystack.includes(term));
	});
}

export function getPageTitle(pathname: string) {
	if (pathname === "/about" || pathname === "/about/") return "About Me";
	return getProject(pathname)?.title ?? "My Projects";
}

export const SITE_HOST = "http://www.louisetiennemessier.com";
