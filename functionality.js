// $( "#id" ).do_thing __ querys by id
// $( ".class").do_thing __ querys by class
// $( "p" ).do_thing __ querys by type (this is calling all paragraphs)
// $( this ).do_thing __ querys current element

console.log("hello");

window.onload = function() {
	console.log('Window loaded');
}

function ChangeIcon(id, path) {
	document.getElementById(id).src = path
}

function DropDownCaret(id_container, id_icon, id_list) {
	ToggleDropDown(id_container);

	const container = document.getElementById(id_container);
	const icon = document.getElementById(id_icon);
	const list = document.getElementById(id_list);

	// Show / Hide list items in dropdown menu
	for (let i = 0; i < list.children.length; i++) {
		list.children.item(i).classList.toggle('show');
	}

	// Change caret icon depending on wheather dropdown is oper or not
	if (container.classList.contains("open")) {
		icon.src = "Images/Icons/caret-down-fill.svg";
	} else {
		icon.src = "Images/Icons/caret-right-fill.svg";
	}
}

function FileDownload(id) {
	const link = document.getElementById(id);
	const icon = link.querySelector('img');
	icon.src = "Images/Icons/file-earmark-check.svg";
	link.style.color = 'grey';
	console.log(link + ' downloaded');
}

function ToggleDropDown(id) {
	var e = document.getElementById(id);
	e.classList.toggle("open");
}

function ToggleDropDown2(id) {
	var e = document.getElementById(id);
	e.classList.toggle("hide");
}

async function LoadImages(id, folder) {
	const Container = document.getElementById(id);
	var path;

	let descriptions = [];

	for (let i = 1; i <= 26; i++) {
		// Get Image descriptions:
		let text;
		try {
			const response = await fetch('https://raw.githubusercontent.com/JacksonW238/jacksonw238.github.io/main/descriptions/' + folder + '/' + i + '.txt');
		    text = await response.text();
			descriptions.push({ _txt: text, _id: folder + '-' + i + '-txt' });

		} catch (err) {
			console.error(err);
			text = ' ';
		}

		////

		// Add Images to gallery:
		path = 'Images/' + folder + '/' + i.toString() + '.png'

		const imEle = document.createElement('img');
		imEle.src = path
		imEle.id = folder + i;

		imEle.classList.add("image-card");
		//imEle.id = id + '-' + i;
		Container.appendChild(imEle);

		imEle.onerror = function () {
		Container.removeChild(imEle);
		};
	}

	////

	// Set up image pop-ups:


	console.log('Loaded Images from ' + folder);
}

function CloseBtn(id) {
	const win = document.getElementById(id);
	win.classList.add('hide');
}

LoadImages("rc-im", "RCCar");
LoadImages("ch-im", "ChasingHammer");
LoadImages("wb-im", "WoodBender");
LoadImages("cg-im", "ClearanceGauge");
LoadImages("lh-im", "LyreHarp");
LoadImages("dc-im", "DerbyCar");
LoadImages("et-im", "EndTable");
