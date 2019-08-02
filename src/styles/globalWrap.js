import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get("window")


/*=========================================================================
======================== RESPONSIVE VALUES ================================
=========================================================================*/   

let WRAP_CONST = {}
let DRAWER_WIDTH = -1
let SCREEN_WIDTH = width
let CREATE_ACCOUNT_KEYBOARD_OFFSET = -1

/*===================================================
= MOBILE PHONES
===================================================*/

if ( width < 700 ) {

    //====== DRAWER WIDTH BECAUSE REACT-NAVIGATION IS WEIRD ======/

    DRAWER_WIDTH = 300,


    WRAP_CONST = {

        //====== HEIGHTS =====//

        HEIGHT: {
            BUTTON: 48,
            CARD_LOADING: 200,
            CARD_MAP: 200,
            DRAWER_LABEL: 48,
            EXPLORE_CARD_TITLE: 48,
            FEED_TITLE: 48,
            FILTER_BAR: 32,
            HEADER: Platform.OS === 'ios' ? 80 : 60,
            ICON: 48,
            IMAGE_CARD: 170,
            INPUT_FIELD: 32,
            INPUT_LABEL: 14,
            MARQUEE: 32,
            NARROW_HEADER: 36,
            NAV_BUTTON: 48,
            PERSONALIZE_FEED_TITLE: 48,
            TAB_NAV_BAR: 32,
            TOGGLE: 48
        },


        //====== WIDTHS =====//

        WIDTH: {
            ICON: 48,
            IMAGE_CARD: 302,
            TAB_NAV_TAB: 200
        },


        //====== MARGINS =====//


        MARGIN: {

            CARD: {
                BOTTOM: 12
            },

            EXPLORE_CARD: {
                BOTTOM: 32,
            },

            NARROW_HEADER: {
                BOTTOM: 36
            },

            PERSONALIZE_FEED_SECTION: {
                BOTTOM: 48
            },

            PERSONALIZE_FEED_TITLE: {
                BOTTOM: 24
            },

            TEXT_SECTION: {
                TOP: 32
            },

            TEXT_BLOCK: {
                TOP: 8
            },

            TUTORIAL_DETAIL: {
                BOTTOM: 24,
            }
        },


        //====== PADDING =====//

        PADDING: {
            CARD_DETAILS: 16,
            DEFAULT: 16,
            NARROW: 24,
            CATEGORIES: 12,

            DETAILS: {
                TOP_BOTTOM: 24
            },

            HEADER: {
                TOP: Platform.OS === 'ios' ? 25 : 0,
            },

            DRAWER: {
                LEFT: 16
            },

            FILTER_BAR: {
                SIDES: 16
            },

            HEADER_LEFT: {
                LEFT: 8
            },

            INPUT_EMPTY: {
                SIDES: 12,
                TOP: 6,
                BOTTOM: 6
            },

            INPUT: {
                SIDES: 12,
                TOP: 8,
                BOTTOM: 4
            },

        }
    }
    
/*===================================================
= SMALLER TABLETS
===================================================*/

} else if ( width > 700 ) {

    

    DRAWER_WIDTH = 600,
    
    WRAP_CONST = {


        //===== HEIGHTS =====//

        HEIGHT: {
            BUTTON: 64,
            CARD_LOADING: 500,
            CARD_MAP: 400,
            DRAWER_LABEL: 64,
            EXPLORE_CARD_TITLE: 64,
            FEED_TITLE: 80,
            FILTER_BAR: 48,
            ICON: 64,
            IMAGE: 64,
            INPUT_FIELD: 36,
            INPUT_LABEL: 18,
            HEADER: Platform.OS === 'ios' ? 80 : 60,
            MARQUEE: 48,
            NARROW_HEADER: 48,
            NAV_BUTTON: 64,
            PERSONALIZE_FEED_TITLE: 36,
            TAB_NAV_BAR: 48,
            TOGGLE: 64
        },


        //===== WIDTHS =====//

        WIDTH: {
            ICON: 64,
            TAB_NAV_TAB: 300,

        },


        //===== MARGINS =====//

        MARGIN: {

            CARD: {
                BOTTOM: 12
            },


            NARROW_HEADER: {
                BOTTOM: 64
            },

            PERSONALIZE_FEED_TITLE: {
                BOTTOM: 48
            },

            PERSONALIZE_FEED_SECTION: {
                BOTTOM: 64
            },

            TEXT_SECTION: {
                TOP: 80
            },

            TEXT_BLOCK: {
                TOP: 24
            },

            TUTORIAL_DETAIL: {
                BOTTOM: 24,
            },
        },


        //===== PADDING =====//

        PADDING: {
            DEFAULT: 24,
            NARROW: 96,
            CARD_DETAILS: 24,

            DETAILS: {
                TOP_BOTTOM: 32
            },

            DRAWER: {
                LEFT: 24
            },

            FILTER_BAR: {
                SIDES: 24
            },

            HEADER: {
                TOP: Platform.OS === 'ios' ? 24 : 0,
            },

            HEADER_LEFT: {
                LEFT: 8
            },

            INPUT_EMPTY: {
                SIDES: 18,
                TOP: 9,
                BOTTOM: 9
            },

            INPUT: {
                SIDES: 18,
                TOP: 12,
                BOTTOM: 6
            },
        }
    }
}




/*=========================================================================
======================== MOBILE PHONE STYLES ==============================
=========================================================================*/
    
const GLOBAL_WRAP = {

        /*===========================================================
        = HEADER
        ===========================================================*/

        HEADER: {
            height: WRAP_CONST.HEIGHT.HEADER,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#303036',
            paddingTop: WRAP_CONST.PADDING.HEADER.TOP
        },

        HEADER_LEFT: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            //paddingLeft: WRAP_CONST.PADDING.HEADER_LEFT.LEFT,
        },

        NARROW_HEADER: {
            height: WRAP_CONST.HEIGHT.NARROW_HEADER,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: WRAP_CONST.MARGIN.NARROW_HEADER.BOTTOM,
            backgroundColor: 'transparent'
        },


        /*===========================================================
        = TAB NAV
        ===========================================================*/

        TAB_NAV_BAR: {
            backgroundColor: '#00586e',
            height: WRAP_CONST.HEIGHT.TAB_NAV_BAR,
        },

        TAB_NAV_TAB: {
            height: WRAP_CONST.HEIGHT.TAB_NAV_BAR,
            width: WRAP_CONST.WIDTH.TAB_NAV_TAB,
            backgroundColor: '#00c1f0'
        },

        TAB_NAV_INDICATOR: {
            backgroundColor: 'transparent',
            height: 0,
            width: 0,
        },


        /*===========================================================
        = DRAWER
        ===========================================================*/

        DRAWER_HEADER: {
            height: WRAP_CONST.HEIGHT.HEADER,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#303036',
            paddingTop: WRAP_CONST.PADDING.HEADER.TOP,
            paddingLeft: WRAP_CONST.PADDING.DEFAULT,
            paddingRight: WRAP_CONST.PADDING.DEFAULT,
        },

        DRAWER_CONTENT: {
            padding: WRAP_CONST.PADDING.DEFAULT
        },

        DRAWER_LABEL: {
            height: WRAP_CONST.HEIGHT.DRAWER_LABEL,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },

        /*===========================================================
        = SCREENS
        ===========================================================*/



        CENTERED: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        DEFAULT: {
            flex: 1,
            padding: WRAP_CONST.PADDING.DEFAULT,
            backgroundColor: '#fff',

        },

        DETAILS: {
            flex: 1,
            paddingTop: WRAP_CONST.PADDING.DETAILS.TOP_BOTTOM,
            paddingBottom: WRAP_CONST.PADDING.DETAILS.TOP_BOTTOM,
            paddingLeft: WRAP_CONST.PADDING.DEFAULT,
            paddingRight: WRAP_CONST.PADDING.DEFAULT,
            backgroundColor: '#fff'
        },

        NARROW: {
            flex: 1,
            justifyContent: 'flex-start',
            paddingRight: WRAP_CONST.PADDING.NARROW,
            paddingLeft: WRAP_CONST.PADDING.NARROW,
            backgroundColor: '#fff',
        },

        NARROW_MAIN: {
            paddingTop: WRAP_CONST.PADDING.NARROW
        },

        NARROW_BUTTON: {
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingRight: WRAP_CONST.PADDING.NARROW,
            paddingLeft: WRAP_CONST.PADDING.NARROW,
            paddingBottom: WRAP_CONST.PADDING.NARROW,
            backgroundColor: 'rgba(255,255,255, 0.4)',
            bottom: 0
        },

        NO_HEADER: {
            flex: 1,
            backgroundColor: '#fff',
            marginTop: 80
        },

        WRAP: {
            flex: 1,
            backgroundColor: '#fff'
        },

        

        // Login and auth screens

        LOGIN: {
            flex: 1,
            backgroundColor: 'transparent',
            paddingLeft: WRAP_CONST.PADDING.NARROW,
            paddingRight: WRAP_CONST.PADDING.NARROW,
        },

        LOGIN_CONTENT: {
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center'
        },


        AUTH: {
            flex: 1,
            backgroundColor: '#303036',
            marginTop: -WRAP_CONST.HEIGHT.HEADER
        },



        AUTH_MAIN_WITH_HEADER: {
            flex: 1,
            //marginTop: WRAP_CONST.HEIGHT.HEADER
        },

        TUTORIAL: {
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor: '#fff',
            paddingTop: (WRAP_CONST.PADDING.NARROW * 2),
            paddingLeft: WRAP_CONST.PADDING.NARROW,
            paddingRight: WRAP_CONST.PADDING.NARROW,
            paddingBottom: WRAP_CONST.PADDING.NARROW
        },


        /*===========================================================
        = TEXT
        ===========================================================*/

        TEXT_SECTION: {
            flex: 1,
            marginTop: WRAP_CONST.MARGIN.TEXT_SECTION.TOP
        },

        TEXT_SECTION_LAST: {
            flex: 1,
            marginTop: WRAP_CONST.MARGIN.TEXT_SECTION.TOP,
            paddingBottom: 72,
        },

        TEXT_BLOCK: {
            flex: 1,
            marginTop: WRAP_CONST.MARGIN.TEXT_BLOCK.TOP
        },




        /*===========================================================
        = CHECKBOX
        ===========================================================*/

        CHECKBOX: {
            flexDirection: 'row',
            paddingTop: 12,
            paddingBottom: 12,
        },


        /*===========================================================
        = BORDER
        ===========================================================*/

        BORDER: {
            borderWidth: 2,
            borderColor: '#a0a0a3',
            marginTop: 16,
            marginBottom: 24,
            padding: WRAP_CONST.PADDING.DEFAULT
        },

        BORDER_TOP: {
            borderTopWidth: 1,
            borderTopColor: '#d9d9da'
        },

        BORDER_TOP_BOTTOM: {
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#d9d9da'
        },

        BORDER_TOP_THICK: {
            borderTopWidth: 2,
            borderTopColor: '#d9d9d9'
        },

        NO_BORDER: {
            height: 48
        },
        

        /*===========================================================
        = ICONS
        ===========================================================*/   

        ICON: {
            width: WRAP_CONST.WIDTH.ICON,
            height: WRAP_CONST.HEIGHT.ICON,
            justifyContent: 'center',
            alignItems: 'center'
        },

        /*===========================================================
        = BUTTONS
        ===========================================================*/

        BUTTON: {
            height: WRAP_CONST.HEIGHT.BUTTON,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            shadowOffset: { width: 0, height: 5 },
            shadowColor: '#000',
            shadowOpacity: 0.7
        },
        CONTACT_BUTTON: {
            height: WRAP_CONST.HEIGHT.BUTTON,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            shadowOffset: { width: 0, height: 5 },
            shadowColor: '#000',
            shadowOpacity: 0.7
        },
        EDIT_BUTTON: {
            height: WRAP_CONST.HEIGHT.BUTTON,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor : '#0067a5',
            shadowOffset: { width: 0, height: 1 },
            shadowColor: '#000',
            shadowOpacity: 0.1
        },
        ACTION_BUTTON: {
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            // alignItems:'center',
            // justifyContent:'center',
            // width:70,
            // position: 'absolute',                                          
            // bottom: '34.85%',                                                    
            // right: '35.01%',
            // top:'34.25%',
            // left: '34.25%',
            height:70,
            width: 60,  
            height: 60,   
            borderRadius: 30,            
            backgroundColor: '#ee6e73',                                    
            position: 'absolute',                                          
            bottom: 10,                                                    
            right: 80, 
         
            borderRadius:100,
        },

        TEXT_BUTTON: {
            height: WRAP_CONST.HEIGHT.BUTTON,
            justifyContent: 'center',
        },

        BORDER_BUTTON: {
            height: WRAP_CONST.HEIGHT.BUTTON,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: WRAP_CONST.PADDING.DEFAULT,
            paddingRight: WRAP_CONST.PADDING.DEFAULT,
            borderWidth: 2,
            borderRadius: 8
        },

        /*===========================================================
        = CATEGORIES
        ===========================================================*/

        CATEGORIES: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingTop: WRAP_CONST.PADDING.CATEGORIES,
            paddingBottom: WRAP_CONST.PADDING.CATEGORIES
        },

        CATEGORY_ROW: {
            flex: 1/4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },

        CATEGORY_BUTTON: {
            flex: 1/3,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        CATEGORY_BUTTON_LABEL: {
            height: 30,
            width: '90%',
            alignItems: 'center',
            flexDirectino: 'row'
        },

        /*===========================================================
        = CAMERA ROLL PICKER
        ===========================================================*/

        CAMERA_ROLL_ROW: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 8
        },

        CAMERA_ROLL_ROW_IMAGE: {
            flex: 1/3,
            justifyContent: 'center',
            alignItems: 'center'
        },

        /*===========================================================
        = INPUT
        ===========================================================*/
        
        INPUT_EMPTY: {      
            flexDirection: 'column',
            borderWidth: 1,
            borderColor: '#d9d9da',
            alignItems: 'flex-start',
            paddingLeft: WRAP_CONST.PADDING.INPUT_EMPTY.SIDES,
            paddingRight: WRAP_CONST.PADDING.INPUT_EMPTY.SIDES,
            paddingTop: WRAP_CONST.PADDING.INPUT_EMPTY.TOP,
            paddingBottom: WRAP_CONST.PADDING.INPUT_EMPTY.BOTTOM,
            marginBottom: 12,
            backgroundColor: '#fff'

        },

        INPUT: {
            flexDirection: 'column',
            borderWidth: 1,
            borderColor: '#d9d9da',
            backgroundColor: '#fff',
            paddingTop: WRAP_CONST.PADDING.INPUT.TOP,
            paddingRight: WRAP_CONST.PADDING.INPUT.SIDES,
            paddingLeft: WRAP_CONST.PADDING.INPUT.SIDES,
            paddingBottom: WRAP_CONST.PADDING.INPUT.BOTTOM,
            marginBottom: 12,
        },

        INPUT_LABEL: {
            height: WRAP_CONST.HEIGHT.INPUT_LABEL,
        },

        INPUT_FIELD: {
            height: WRAP_CONST.HEIGHT.INPUT_FIELD,
            width: '100%'
        },

        /*===========================================================
        = EDIT_INPUT
        ===========================================================*/

        EDIT_INPUT_FIELD: {
            height: WRAP_CONST.HEIGHT.INPUT_FIELD,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff'
        },

        /*===========================================================
        = NAV BUTTONS
        ===========================================================*/

        NAV_BUTTON: {
            height: WRAP_CONST.HEIGHT.NAV_BUTTON,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //borderBottomWidth: 1,
            //borderBottomColor: '#d9d9da',
            //backgroundColor: '#fff'
        },

        /*===========================================================
        = TOGGLE SWITCH
        ===========================================================*/

        TOGGLE: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: WRAP_CONST.HEIGHT.TOGGLE,
            //borderBottomWidth: 1,
            //borderBottomColor: '#d9d9da',
        },

        TOGGLE_CTA: {
            flexDirection: 'row',
            alignItems: 'center'
        },

        /*===========================================================
        = MODAL
        ===========================================================*/

        MODAL: {
            position: 'absolute',
            width: '100%',
            backgroundColor: '#fff',
            paddingTop: WRAP_CONST.PADDING.DEFAULT,
            paddingRight: WRAP_CONST.PADDING.DEFAULT,
            paddingLeft: WRAP_CONST.PADDING.DEFAULT,
            paddingBottom: 28,
            bottom: 0,
        },

        MODAL_WITH_BUTTON: {
            position: 'absolute',
            width: '100%',
            backgroundColor: '#fff',
            paddingLeft: WRAP_CONST.PADDING.DEFAULT,
            paddingTop: WRAP_CONST.PADDING.DEFAULT,
            paddingRight: WRAP_CONST.PADDING.DEFAULT,
            paddingBottom: 12,
            bottom: 0,
        },


        /*===========================================================
        = FEEDS
        ===========================================================*/

        BOTTOM_NAV: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: 48,
            backgroundColor: '#303036',
            bottom: 0,
            //padding: 12
        },

        BOTTOM_NAV_BUTTON: {
            flex: 1/2,
            justifyContent: 'center',
            alignItems: 'center'
        },

        FILTER_BAR: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: WRAP_CONST.HEIGHT.FILTER_BAR,
            backgroundColor: '#006a83',
            paddingRight: WRAP_CONST.PADDING.FILTER_BAR.SIDES,
            paddingLeft: WRAP_CONST.PADDING.FILTER_BAR.SIDES,
        },

        MARQUEE: {
            height: WRAP_CONST.HEIGHT.MARQUEE,
            backgroundColor: '#cf150a',
            justifyContent: 'center',
        },

        FILTER_BAR_EMPTY: {
            flex: 1, 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: WRAP_CONST.HEIGHT.FILTER_BAR,
            backgroundColor: '#006a83'
        },


        /*===========================================================
        = FEED CARDS
        ===========================================================*/

        /*===== MY_HCG =====*/

        PINNED_CARD: {
            flex: 1,
        },

        CARD: {
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: WRAP_CONST.MARGIN.CARD.BOTTOM,
            backgroundColor: '#dd3333',
            overflow: 'hidden',
            borderBottomWidth: 1,
            borderBottomColor: '#cdcdcd'
        },

        CARD_WITH_ICON_HEADER: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        CARD_DETAILS: {
            flex: 1,
            justifyContent: 'space-between',
            padding: WRAP_CONST.PADDING.CARD_DETAILS,

        },

        EXPLORE_IMAGE: {
            width: SCREEN_WIDTH,
            height: (9 * SCREEN_WIDTH)/ 16,
        },

        CARD_MAP: {
            width: '100%',
            height: WRAP_CONST.HEIGHT.CARD_MAP,
            backgroundColor: '#d9d9da',
            flex: 1,
        },

        CARD_SECTION: {
            paddingBottom: 16
        },


        /*===== EXPLORE ======*/

        EXPLORE_CARD_DETAILS: {
            flex: 1,
            height: WRAP_CONST.HEIGHT.EXPLORE_CARD_TITLE,
            justifyContent: 'center',
            alignItems: 'center',
        },


        EMERGENCY_ALERT: {
            height: 120,
            width: 300, 
            borderColor: '#dd3333',
            borderWidth: 4,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            paddingLeft: 32,
            marginRight: 16
        },

        CARD_ALIGN_RIGHT: {
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center'
        },

   

        /*===========================================================
        = ACCORDION
        ===========================================================*/

        /*===== GENERIC =====*/

        ACCORDION_WRAP: {
            marginTop: 36,
            borderTopWidth: 2,
            borderTopColor: '#d9d9da '
        },

        ACCORDION_HEADER: {
            height: 64,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: '#d9d9da'
        },

        ACCORDION_HEADER_ACTIVE: {
            height: 64,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#eeeeee'
        },

        ACCORDION_DETAILS: {
            paddingTop: 24,
            paddingBottom: 24,
            borderBottomColor: '#d9d9da',
            borderBottomWidth: 2
        },
        

        /*===== SPECIFIC =====*/

        CONTACT_ACCORDION_HEADER: {
            height: 64,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: WRAP_CONST.PADDING.DEFAULT,
            paddingRight: WRAP_CONST.PADDING.DEFAULT,
            borderBottomWidth: 2,
            borderBottomColor: '#d9d9da'
        },

        CONTACT_ACCORDION_HEADER_ACTIVE: {
            height: 64,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#eeeeee'
        },

        CONTACT_ACCORDION_DETAILS: {
            flex: 1,
            padding: 16,
            height: 64,
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderBottomColor: '#d9d9da'
        },
    
        CONTACT_ACCORDION_DETAILS_ICON: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 1,
            borderRightColor: '#d9d9da'
        },
    
        CONTACT_ACCORDION_DETAILS_ICON_LAST: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },


        /*===========================================================
        = USER
        ===========================================================*/

        COUNCILMEN_FEED: {
            flex: 1,
            backgroundColor: '#fff',
            marginTop: 36,
            marginBottom: 36,
        },

        COUNCILMEN_CARD: {
            width: 300,
            borderWidth: 2,
            borderColor: '#d9d9da',
            padding: 16,
            marginRight: 16,
            marginLeft: 16
        },

        COUNCILMEN_CARD_HEADER: {
            flex: 1, 
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d9d9da',
            paddingBottom: 16,
        },

        COUNCILMEN_IMAGE: {
            height: 100,
            width: 100,
            borderRadius: 50
        },

        COUNCILMEN_CARD_DETAILS: {
            flexDirection: 'column',
            justifyContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 24
        },

        COUNCILMEN_CARD_ICONS: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 16
        },





        /*===========================================================
        = MYHCG
        ===========================================================*/

        /*=== Feed ===*/

        MYHCG_NO_FEEDS: {
            height: height * .7,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16
        },

        /*===========================================================
        = EXPLORE HORRY/ I WANT TO
        ===========================================================*/

        /*=== DETAILS SCREEN ===*/

        DETAIL_SECTION: {
            marginTop: 48,
            borderTopWidth: 2,
            borderTopColor: '#d9d9da'
        },

        DETAIL_SECTION_LAST: {
            marginTop: 48,
            marginBottom: 64,
            borderTopWidth: 1,
            borderTopColor: '#d9d9da'
        },

        DETAIL: {
            height: 64,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d9d9da'
        },

        DETAIL_ICON: {
            width: 32,
            height: 48,
            justifyContent: 'center',
            alignItems: 'flex-start' 
        },



        DETAIL_TITLE: {
            height: 48,
            justifyContent: 'center',
            alignItems: 'flex-start'
        },


        DETAIL_FEATURES: {
            paddingTop: 16,
            paddingBottom: 96
        },

        DETAIL_FEATURE_ITEM: {
            height: 24,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 24
        },

        /*===========================================================
        = M311
        ===========================================================*/

        /*=== LOCATION SCREEN ===*/

        OR_TEXT: {
            height: 48,
            justifyContent: 'center',
            alignItems: 'center'
        },

        /*=== ADDITIONAL INFORMATION SCREEN ===*/

        INCLUDE_PHOTO: {
            borderTopWidth: 1,
            borderTopColor: '#d9d9da',
            paddingBottom: 30
        },

        THUMBNAIL: {
            paddingTop: 10,
            flexDirection: 'row'
        },

        DELETE_THUMBNAIL: {
            width: 48,
            height: 48,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            marginLeft: -12,
            marginTop: -10
        },


        CONTACT_FULL_LOCATION: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d9d9da',
            paddingTop: 16,
            paddingBottom: 16
        },

        CONTACT_FULL_LOCATION_DETAILS: {
            paddingLeft: 16,
            paddingRight: 16
        },


        /*===========================================================
        = TUTORIAL
        ===========================================================*/

        TUTORIAL_DETAIL: {
            marginBottom: WRAP_CONST.MARGIN.TUTORIAL_DETAIL.BOTTOM
        },

        /*====== Connect Feed Intro Screen ======*/

        TUTORIAL_TAB_NAV_BAR: {
            height: WRAP_CONST.HEIGHT.TAB_NAV_BAR,
            width: '100%',
            backgroundColor: '#009ec5',
            flexDirection: 'row'
        },

        TUTORIAL_TAB_NAV_TAB: {
            height: WRAP_CONST.HEIGHT.TAB_NAV_BAR,
            width: WRAP_CONST.WIDTH.TAB_NAV_TAB,
            justifyContent: 'center',
            alignItems: 'center'
            
        },

        TUTORIAL_ICON_ACTIVE: {
            width: WRAP_CONST.WIDTH.ICON,
            height: WRAP_CONST.HEIGHT.ICON,
            borderRadius: WRAP_CONST.HEIGHT.ICON,
            borderWidth: 5,
            borderColor: '#e3170a',
            justifyContent: 'center',
            alignItems: 'center'
        },

        TUTORIAL_TEXT_ACTIVE: {
            padding: 12,
            borderRadius: 12,
            backgroundColor: 'transparent',
            borderColor: '#00c1f0',
            borderWidth: 5
        },

        /*===========================================================
        = USER
        ===========================================================*/

        /*=== LOCATIONS ===*/

        SEARCHBOX: {
            backgroundColor: '#fff',
            marginTop: -16,
            marginBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            borderRightWidth: 1,
            borderRightColor: '#a0a0a3',
            borderLeftWidth: 1,
            borderLeftColor: '#a0a0a3',
            borderBottomWidth: 1,
            borderBottomColor: '#a0a0a3',
            borderTopWidth: 1,
            borderTopColor: '#d9d9da'
        },

        SELECTED_LOCATION: {
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#a0a0a3',
            marginTop: 16,
            marginBottom: 24
        },

        SELECTED_LOCATION_DETAIL: {
            flex: 1,
            padding: 16
        },

        REMOVE_SELECTED_LOCATION: {
            position: 'absolute',
            width: 48,
            paddingTop: 16,
            alignItems: 'center',
            right: 0,
            top: 0
        },

        /*=== PERSONALIZE FEED ===*/

        PERSONALIZE_FEED_SECTION: {
            marginBottom: WRAP_CONST.MARGIN.PERSONALIZE_FEED_SECTION.BOTTOM,
        },

        PERSONALIZE_FEED_TITLE: {
            width: '100%', 
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderBottomWidth: 2,
            borderBottomColor: '#303036',
            marginBottom: WRAP_CONST.MARGIN.PERSONALIZE_FEED_TITLE.BOTTOM
        },

        PERSONALIZE_FEED_TITLE_WITH_BUTTON: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderBottomWidth: 2,
            borderBottomColor: '#303036',
            marginBottom: WRAP_CONST.MARGIN.PERSONALIZE_FEED_TITLE.BOTTOM
        },


        /*===========================================================
        = USER
        ===========================================================*/

        COUNCILMEN: {
            marginTop: 24
        },

        /*===========================================================
        = LOADING STATE
        ===========================================================*/

        FEED_LOADING: {
            backgroundColor: '#eee',
        },

        CARD_LOADING: {
            flex: 1,
            height: WRAP_CONST.HEIGHT.CARD_LOADING,
            justifyContent: 'space-between',
            marginBottom: WRAP_CONST.MARGIN.CARD.BOTTOM,
            backgroundColor: '#fff'
        },

        HORIZONTAL_FEED_LOADING: {
            flex: 1,
            backgroundColor: '#eee',
            marginTop: 36,
            marginBottom: 36
        },

        COUNCILMEN_CARD_LOADING: {
            flex: 1,
            height: 160,
            width: 300,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: '#eee'
        },

        INPUT_LOADING: {
            height: WRAP_CONST.HEIGHT.INPUT_LABEL + WRAP_CONST.HEIGHT.INPUT_FIELD,
            width: '100%',
            backgroundColor: '#d9d9da',
            marginBottom: 12
        },


        /*===========================================================
        = ERROR STATE
        ===========================================================*/

        /*=== FEEDS ===*/

        FEED_ERROR: {
            flex: 1, 
            backgroundColor: '#d9d9da',
            justifyContent: 'center',
            alignItems: 'center',
        },

        HORIZONTAL_FEED_ERROR: {
            flex: 1,
            height: 200,
            backgroundColor: '#d9d9da',
            justifyContent: 'center',
            alignItems: 'center',
        },

        
        /*===========================================================
        = IMAGE CAPTURE
        ===========================================================*/
        
        IMAGE_WRAP: {
            flex: 1,
            backgroundColor: '#fff',
            marginTop: -80,
        },
        
        IMAGE_BACKGROUND_WRAP: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: 24,
            paddingLeft: 24,
            paddingBottom: 24,
            backgroundColor: '#fff',
        },
        
      }


 export { GLOBAL_WRAP }
 export default DRAWER_WIDTH
