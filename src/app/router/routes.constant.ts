export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP_STEP_ONE: '/signup/step-one',
  SIGN_UP_STEP_TWO: '/signup/step-two',
  CREATE_FONT_STEP_ONE: '/create-font/step-one',
  CREATE_FONT_STEP_TWO: '/create-font/step-two',
  CREATE_FONT_STEP_THREE: '/create-font/step-three',
  EXPLORE: '/explore',
  DETAIL: (id: string | number = ':id') => `/detail/${id}`,

  ACCOUNT_INFO: '/mypage/account-info',
  ACCOUNT_EDIT: '/mypage/account-info/edit',
  MY_FONT: '/mypage/my-font',
  BOOKMARK: '/mypage/bookmark',
  NOT_FOUND: '/404',
} as const
