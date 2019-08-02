import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class ApplicationStatus extends Component {
    countStatus = (array, status) => {
      return array.filter(a => a.status === status).length;
    };
    render() {
        const { selectedStatus, selectStatus, data } = this.props;
        return (
            <View
                style={styles.container}
            >
                <TouchableOpacity
                    onPress={() => selectStatus(0)}
                    style={selectedStatus===0?styles.statusItemContainerActive:styles.statusItemContainer}
                >
                    <Text style={[styles.actionReqNumberText, selectedStatus===0? {color: 'white'}: null]}>
                        {this.countStatus(data, 'actionreq')}
                    </Text>
                    <Text style={[styles.applicationStatusTitleText, selectedStatus===0? {color: 'white'}: null]}>
                        Action Req
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selectStatus(1)}
                    style={selectedStatus===1?styles.statusItemContainerActive:styles.statusItemContainer}
                >
                    <Text style={[styles.submittedNumberText, selectedStatus===1? {color: 'white'}: null]}>
                        {this.countStatus(data, 'submitted')}
                    </Text>
                    <Text style={[styles.applicationStatusTitleText, selectedStatus===1? {color: 'white'}: null]}>
                        Submitted
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selectStatus(2)}
                    style={selectedStatus===2?styles.statusItemContainerActive:styles.statusItemContainer}
                >
                    <Text style={[styles.inProgressNumberText, selectedStatus===2? {color: 'white'}: null]}>
                        {this.countStatus(data, 'inprogress')}
                    </Text>
                    <Text style={[styles.applicationStatusTitleText, selectedStatus===2?{color: 'white'}:null]}>
                        In Progress
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selectStatus(3)}
                    style={selectedStatus===3?styles.statusItemContainerActive:styles.statusItemContainer}
                >
                    <Text style={[styles.completeNumberText, selectedStatus===3? {color: 'white'}: null]}>
                        {this.countStatus(data, 'completed')}
                    </Text>
                    <Text style={[styles.applicationStatusTitleText, selectedStatus===3? {color: 'white'}: null]}>
                        Completed
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selectStatus(4)}
                    style={selectedStatus===4?styles.statusItemContainerActive:styles.statusItemContainer}
                >
                    <Text style={[styles.statusXNumberText, selectedStatus===4? {color: 'white'}: null]}>
                        {this.countStatus(data, 'statusx')}
                    </Text>
                    <Text style={[styles.applicationStatusTitleText, selectedStatus===4? {color: 'white'}: null]}>
                        Status X
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginTop: 5,
        backgroundColor: 'rgba(246,248,249,0.98)',
    },
    statusItemContainer: {
        backgroundColor: "#fff",
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 1,},
        shadowColor: 'rgba(0,0,0,0.07)',
        shadowOpacity: 14.0,
        alignItems: 'center'
    },
    statusItemContainerActive: {
        backgroundColor: "#F27A54",
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 1,},
        shadowColor: 'rgba(0,0,0,0.07)',
        shadowOpacity: 14.0,
        alignItems: 'center'
    },
    actionReqNumberText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 20,
        color: "#F27A54",
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submittedNumberText: {
        color: "#549DF2",
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 20,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inProgressNumberText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 20,
        color: "#FAB44B",
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    completeNumberText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 20,
        color: "#75C77D",
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusXNumberText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 20,
        color: "#FF5050",
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    applicationStatusTitleText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 10,
        color: "#808080",
        paddingBottom: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
