// 퀴즈 정답 -> 점수 획득
// 오답 -> 그대로

// state -> score

const CHECK_CORRECT = 'score/CHECK_CORRECT';
const NEXT_PAGE = 'score/NEXT_PAGE';
const RESET = 'score/RESET';

// 액션 생성 함수
export function check_correct({ quizeIndex, answerIndex }) {
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
					player: '데이비드 베컴',
					isCorrect: false,
				},

				{
					player: '킬리앙 음바페',
					isCorrect: true,
				},

				{
					player: '케빈 필립스',
					isCorrect: false,
				},
			],
		},

		{
			q: '다음 이미지에 있는 축구선수의 이름은 무엇일까요?',
			a: [
				{
					player: '칼럼 윌슨',
					isCorrect: true,
				},

				{
					player: '애쉴리 영',
					isCorrect: false,
				},

				{
					player: '메이슨 마운트',
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
				score: state.quize[action.payload.quizeIndex].isCorrect
					? state.score + 10
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
