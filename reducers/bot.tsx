import {
    REQUEST_BOT_TEMPLATES, SUCCESS_BOT_TEMPLATES, FAILURE_BOT_TEMPLATES,
    REQUEST_MAKE_NEW_TEMPLATE, SUCCESS_MAKE_NEW_TEMPLATE, FAILURE_MAKE_NEW_TEMPLATE,
    REQUEST_UPDATE_TEMPLATE, SUCCESS_UPDATE_TEMPLATE, FAILURE_UPDATE_TEMPLATE,
    REQUEST_DELETE_TEMPLATE, SUCCESS_DELETE_TEMPLATE, FAILURE_DELETE_TEMPLATE
} from "../constants/actionNames";


export interface Bot {
    _id: string;
    name: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    imageUrl?: string;
}

export interface BotState {
    botTemplates: Bot[],
    isLoadingTeamplates: boolean, // [로딩] 전체 봇
    isAddingTemplate: boolean, // [0-로딩] 봇 생성
    isSuccessAddTamplate: boolean, // [0-성공] 봇 생성
    isUpdatingTemplate: boolean,// [1-로딩] 봇 업데이트
    isSuccessUpdateTemplate: boolean, // [1-성공] 봇 업데이트
    isDeletingTemplate:boolean,// [2-로딩] 봇 삭제
    isSuccessDeleteTemplate:boolean,// [2-로딩] 봇 삭제

}

export const initialState: BotState = {
    botTemplates: [],
    isLoadingTeamplates: false,
    isAddingTemplate: false,
    isSuccessAddTamplate: false,
    isUpdatingTemplate: false,
    isSuccessUpdateTemplate:false,
    isDeletingTemplate:false,
    isSuccessDeleteTemplate:false
};

const botReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_BOT_TEMPLATES: {
            return {
                ...state,
                isLoadingTeamplates: false,
            }
        }
        case SUCCESS_BOT_TEMPLATES: {
            const result = action.data.data;
            return {
                ...state,
                isLoadingTeamplates: true,
                botTemplates: result.reverse()
            }
        }
        case FAILURE_BOT_TEMPLATES: {
            return {
                ...state,
                isLoadingTeamplates: false
            }
        }
        case REQUEST_MAKE_NEW_TEMPLATE: {
            return {
                ...state,
                isAddingTemplate: true,
                isSuccessAddTamplate: false
            }
        }
        case SUCCESS_MAKE_NEW_TEMPLATE: {
            return {
                ...state,
                isAddingTemplate: false,
                isSuccessAddTamplate: true,
                botTemplates: [action.data.data, ...state.botTemplates]
            }
        }
        case FAILURE_MAKE_NEW_TEMPLATE: {
            return {
                ...state,
                isAddingTemplate: false,
                isSuccessAddTamplate: false
            }
        }
        case REQUEST_UPDATE_TEMPLATE: {
            return {
                ...state,
                isUpdatingTemplate: true,
                isSuccessUpdateTemplate: false
            }
        }
        case SUCCESS_UPDATE_TEMPLATE: {
            const updatedTemplateIndex = state.botTemplates.findIndex(t => t._id === action.data._id);
            const copiedAllTemplates = [...state.botTemplates];
            copiedAllTemplates[updatedTemplateIndex] = action.data;
            return {
                ...state,
                isUpdatingTemplate: false,
                isSuccessAddTamplate: true,
                botTemplates: copiedAllTemplates
            }
        }
        case FAILURE_UPDATE_TEMPLATE: {
            return {
                ...state,
                isUpdatingTemplate: false,
                isSuccessUpdateTemplate: false
            }
        }
        case REQUEST_DELETE_TEMPLATE: {
            return {
                ...state,
                isDeletingTemplate: true,
                isSuccessDeleteTemplate: false
            }
        }
        case SUCCESS_DELETE_TEMPLATE: {
            return {
                ...state,
                isUpdatingTemplate: false,
                isSuccessAddTamplate: true,
                botTemplates: [...state.botTemplates.filter(t => t._id !== action.target._id)]
            }
        }
        case FAILURE_DELETE_TEMPLATE: {
            return {
                ...state,
                isDeletingTemplate: false,
                isSuccessDeleteTemplate: false
            }
        }
        default: {
            return {...state}
        }
    }
};


export default botReducer