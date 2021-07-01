// 퀴즈 정답 -> 점수 획득
// 오답 -> 그대로

// state -> score

const CHECK_CORRECT = 'score/CHECK_CORRECT';
const NEXT_PAGE = 'score/NEXT_PAGE';
const RESET = 'score/RESET';

// 액션 생성 함수
export function check_correct(quizeIndex, answerIndex) {
	return {
		type: CHECK_CORRECT,
		payload: { quizeIndex, answerIndex },
	};
}

export function next_page() {
	return {
		type: NEXT_PAGE,
	};
}

export function reset() {
	return {
		type: RESET,
	};
}
// 초기 상태
const initialState = {
	score: 0,
	page: 0, // 0: 인트로 페이지
	quize: [
		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Joelinton',
					isCorrect: false,
				},

				{
					player: 'Ansu Fati',
					isCorrect: true,
				},

				{
					player: 'Emre Can',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Darnell Johnson',
					isCorrect: true,
				},

				{
					player: 'Amadou Haidara',
					isCorrect: false,
				},

				{
					player: 'James Milner',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Fabinho',
					isCorrect: true,
				},

				{
					player: 'Aaron Wan-Bissaka',
					isCorrect: false,
				},

				{
					player: 'Mason Mount',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'David Luiz',
					isCorrect: false,
				},

				{
					player: 'Harvey Barnes',
					isCorrect: true,
				},

				{
					player: 'Curtis Jones',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Peter Gulacsi',
					isCorrect: false,
				},

				{
					player: 'Mateu Jaume Morey Bauza',
					isCorrect: false,
				},

				{
					player: 'Liam Cooper',
					isCorrect: true,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Leroy Sane',
					isCorrect: false,
				},

				{
					player: 'Manuel Akanji',
					isCorrect: true,
				},

				{
					player: 'Matteo Guendouzi',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Maximilian Beier',
					isCorrect: false,
				},

				{
					player: 'Nico Schulz',
					isCorrect: false,
				},

				{
					player: 'Matt Doherty',
					isCorrect: true,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Maitland-Niles',
					isCorrect: false,
				},

				{
					player: 'Harry Kane',
					isCorrect: false,
				},

				{
					player: 'Patrick Bamford',
					isCorrect: true,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Serge Gnabry',
					isCorrect: true,
				},

				{
					player: 'Joe Gelhardt',
					isCorrect: false,
				},

				{
					player: 'Kasper Schmeichel',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Kieran Tierney',
					isCorrect: true,
				},

				{
					player: 'Luke Thomas',
					isCorrect: false,
				},

				{
					player: 'Dean Henderson',
					isCorrect: true,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Joao Cancelo',
					isCorrect: true,
				},

				{
					player: 'Daniel Olmo',
					isCorrect: false,
				},

				{
					player: 'Kalvin Philips',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Joshua Zirkzee',
					isCorrect: false,
				},

				{
					player: 'Julian Brandt',
					isCorrect: true,
				},

				{
					player: 'Mason Greenwood',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Kingsley Coman',
					isCorrect: false,
				},

				{
					player: 'Kelechi Iheanacho',
					isCorrect: true,
				},

				{
					player: 'Mohamed Salah',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Oliver Baumann',
					isCorrect: false,
				},

				{
					player: 'Paulo Gazzaniga',
					isCorrect: false,
				},

				{
					player: 'Marcel Sabitzer',
					isCorrect: true,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Scott McTominay',
					isCorrect: true,
				},

				{
					player: 'Kevin De Bruyne',
					isCorrect: false,
				},

				{
					player: 'Steven Bergwijn',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'jamal Lewis',
					isCorrect: false,
				},

				{
					player: 'gabriel magalhaes',
					isCorrect: true,
				},

				{
					player: 'Pierre-Emerick Aubameyang',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Erling Haaland',
					isCorrect: false,
				},

				{
					player: 'Pedri',
					isCorrect: false,
				},

				{
					player: 'Niklas Sule',
					isCorrect: true,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'DeAndre Yedlin',
					isCorrect: true,
				},

				{
					player: 'Takumi Minamino',
					isCorrect: false,
				},

				{
					player: 'Pierre-Emile Hojbjerg',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Jack Grealish',
					isCorrect: false,
				},

				{
					player: 'Ben Davies',
					isCorrect: true,
				},

				{
					player: 'Paul Pogba',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: 'Kylian Mbappe',
					isCorrect: false,
				},

				{
					player: 'Serge Aurier',
					isCorrect: true,
				},

				{
					player: 'Marco Verratti',
					isCorrect: false,
				},
			],
		},
	],
};

// 리듀서
export default function score(state = initialState, action) {
	switch (action.type) {
		case CHECK_CORRECT:
			return {
				...state,
				score: state.quize[action.payload.quizeIndex].a[
					action.payload.answerIndex
				].isCorrect
					? state.score + 5
					: state.score,
			};
		case NEXT_PAGE:
			return {
				...state,
				page: state.page + 1,
			};
		case RESET:
			return {
				...state,
				score: 0,
				page: 0,
			};
		default:
			return state;
	}
}
