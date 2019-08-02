import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window")


/*=========================================================================
======================== RESPONSIVE VALUES ================================
=========================================================================*/   

let ASSET_CONST = {}
let SCREEN_WIDTH = width

/*===================================================
= MOBILE PHONES
===================================================*/

if ( width < 700 ) {
    ASSET_CONST = {
        
        PADDING: {
            DEFAULT: 16,
        },

        HEIGHT: {
            CATEGORY_BUTTON_ICON: 84,
            EDIT_INPUT_ICON: 20,
            ICON: 20,
            LOADING_CARD: 200,
            MENU_STACK_ICON: 20,
            LOADING_BAR: 200,
            PIN_ICON: 24
        },

        WIDTH: {
            CATEGORY_BUTTON_ICON: 84,
            EDIT_INPUT_ICON: 20,
            ICON: 20,
            MENU_STACK_ICON: 20
            
        },

        FONT_SIZE: {
            INPUT: 16
        },

        MARGIN: {
            
            PIN_ICON: {
                RIGHT: 10,
                BOTTOM: 24
            }

        },

        MARGIN_LEFT: {
            EDIT_INPUT_ICON: -24
        }
        
        //=== SPECIAL USE CASES ===//


    }
   
    
/*===================================================
= SMALLER TABLETS
===================================================*/

} else if ( width > 700 ) {
    ASSET_CONST = {
        
        PADDING: {
            DEFAULT: 24
        },

        HEIGHT: {
            CATEGORY_BUTTON_ICON: 128,
            EDIT_INPUT_ICON: 24,
            ICON: 24,
            LOADING_CARD: 300,
            MENU_STACK_ICON: 24,
            PIN_ICON: 36
        },

        WIDTH: {
            CATEGORY_BUTTON_ICON: 128,
            EDIT_INPUT_ICON: 24,
            ICON: 24,
            MENU_STACK_ICON: 24
            
        },

        FONT_SIZE: {
            INPUT: 18
        },

        MARGIN: {
            
            PIN_ICON: {
                RIGHT: 12,
                BOTTOM: 24,
            }
        },

        MARGIN_LEFT: {
            EDIT_INPUT_ICON: -30
        },
    }
}





let GLOBAL_ASSET = {}


/*=========================================================================
========================= MOBILE PHONE STYLES =============================
=========================================================================*/
    
GLOBAL_ASSET = {

    /*===========================================================
    = ICONS
    ===========================================================*/

    ICON: {
        height: ASSET_CONST.HEIGHT.ICON,
        width: ASSET_CONST.WIDTH.ICON
    },

    MENU_STACK_ICON: {
        width: ASSET_CONST.WIDTH.MENU_STACK_ICON,
        height: ASSET_CONST.HEIGHT.MENU_STACK_ICON
    },

    CATEGORY_BUTTON_ICON: {
        height: ASSET_CONST.HEIGHT.CATEGORY_BUTTON_ICON,
        width: ASSET_CONST.WIDTH.CATEGORY_BUTTON_ICON,
        alignSelf: 'center',
    },

    EMERGENCY_ALERT_ICON : {
        width: 20,
        height: 20,
    },

    CARD_USER_LOCATION_ICON: {
        width: 16,
        height: 16,
        marginRight: 2
    },

    DELETE_THUMBNAIL_ICON: {
        alignSelf: 'flex-start',
        height: 20,
        width: 20
    },

    LOGIN_ICON: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        //marginBottom: 60
    },

    MAP_ICON: {
        height: 42,
        width: 42
    },

    PIN_ICON: {
        position: 'absolute',
        height: ASSET_CONST.HEIGHT.PIN_ICON,
        width: ASSET_CONST.HEIGHT.PIN_ICON,
        bottom: ASSET_CONST.MARGIN.PIN_ICON.BOTTOM,
        right: ASSET_CONST.MARGIN.PIN_ICON.RIGHT,
        zIndex: 99999
    },

    ACCORDION_ARROW_ICON: {
        width: 12,
        height: 8
    },

    EDIT_INPUT_ICON: {
        alignSelf: 'flex-start',
        height: ASSET_CONST.HEIGHT.EDIT_INPUT_ICON,
        width: ASSET_CONST.HEIGHT.EDIT_INPUT_ICON,
        marginLeft: ASSET_CONST.MARGIN_LEFT.EDIT_INPUT_ICON,
        zIndex: 1
    },

    ERROR_ICON: {
        width: 200,
        height: 200,
        marginTop: -100
    },
    
    SHUTTER_ICON: {
        width: 64,
        height: 64
    },

    COUNCIL_CARD_PRIMARY_ICON: {
        height: ASSET_CONST.HEIGHT.ICON,
        width: ASSET_CONST.WIDTH.ICON,
        position: 'absolute',
        right: 8,
        top: 8,

    },
    
    /*===========================================================
    = COMMON
    ===========================================================*/

    INPUT: {
        color: '#303036',
        textAlignVertical: 'center',
        fontSize: ASSET_CONST.FONT_SIZE.INPUT,
        fontFamily: 'Poppins-Regular',
        margin: 0,
        padding: 0,
        flex: 1,
        height: 60,
    },

    EDIT_INPUT: {
        width: '100%',
        color: '#303036',
        textAlignVertical: 'center',
        fontSize: ASSET_CONST.FONT_SIZE.INPUT,
        fontFamily: 'Poppins-Regular',
        height: 48
    },

    MULTILINE_INPUT: {
        color: '#303036',
        textAlignVertical: 'top',
        height: 200,
        fontSize: ASSET_CONST.FONT_SIZE.INPUT,
        //fontFamily: 'Poppins-Regular',
    },


    /*===========================================================
    = DIVS
    ===========================================================*/

    CARD_COLOR_BAR: {
        position: 'absolute',
        width: 6,
        height: '100%',
    },

    /*===========================================================
    = IMAGES
    ===========================================================*/
    
    THUMBNAIL_IMAGE: {
        height: 100,
        width: 100
    },

    ANIMAL_CARD_IMAGE: {
        width: '100%',
        height: SCREEN_WIDTH
    },

    ANIMAL_SHELTER_IMAGE: {
        width: '100%',
        height: SCREEN_WIDTH,
        backgroundColor: 'orange',
    },

    PINNED_CARD_HEADER: {
        width: SCREEN_WIDTH,
        height: (SCREEN_WIDTH * 6)/100
    },

    /*===========================================================
    = LOADING
    ===========================================================*/

    LOADING_CARD: {
        width: '100%',
        height: ASSET_CONST.HEIGHT.LOADING_BAR,
        marginBottom: 24,
    },

    LOADING_IMAGE: {
        backgroundColor: '#d9d9da',
    },

    LOADING_TOGGLE: {
        width: 64,
        height: 36,
        borderRadius: 36,
        marginRight: 16,
        backgroundColor: '#d9d9d9'
    },
    
    ICON_LOADING: {
        width: ASSET_CONST.HEIGHT.ICON,
        height: ASSET_CONST.HEIGHT.ICON,
        borderRadius: ASSET_CONST.HEIGHT.ICON,
        backgroundColor: '#d9d9da',
        marginRight: 8
    },

    LOADING_CATEGORY_IMAGE: {
        height: ASSET_CONST.HEIGHT.CATEGORY_BUTTON_ICON,
        width: ASSET_CONST.WIDTH.CATEGORY_BUTTON_ICON,
        borderRadius: 90,
        backgroundColor: '#d9d9da'
    },
    LOADING_INPUT: {
        width: '100%',
        height: 48,
        backgroundColor: '#ededee',
        marginBottom: 12
    }
}



export { GLOBAL_ASSET }