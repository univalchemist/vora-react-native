import React, {Component} from "react";
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import images from "../../../assets";

export default class ApplicationFeed extends Component {
    displayName = (name) => {
        const _array = name.split(" ");
        let _name = "";
        return _array.map(w =>
            _name + w.charAt(0).toUpperCase() + w.slice(1) + " ")
    };
    displayStatus = (status) => {
      switch (status) {
          case "submitted":
              return "Submitted";
          case "inprogress":
              return "In Progress";
          case "actionreq":
              return "Action Req";
          case "completed":
              return "Completed";
          case "statusx":
              return "Status X";
          default:
              return "";
      }
    };
    render() {
        const {data} = this.props;
        return (
            <View style={styles.container}>
                {data.map
                (app =>
                    (
                        <TouchableOpacity
                            style={styles.cardWrap}

                        >
                            <View style={styles.sectionTop}>
                                <View style={{ justifyContent: 'center'}}>
                                    <Image
                                        source={images.applicationItemIcon}
                                    />
                                </View>
                                <View style={styles.sectionTopBody}>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <Text style={styles.appNameStyle}>
                                            {this.displayName(app.name)}
                                        </Text>
                                        <Text style={styles.appAcnStyle}>
                                            {"# " + app.acn}
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                                        <View style={styles.statusNameContainer}>
                                            <Text style={styles.statusNameStyle}>
                                                {this.displayStatus(app.status)}
                                            </Text>
                                        </View>
                                        <Text style={styles.categoryStyle}>
                                            {'Signature & Documents'}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.sectionBottom}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 11 }}>
                                        {'Effective Date'}
                                    </Text>
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: 12, marginTop: 5 }}>
                                        {app.requestEffectiveDate}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 11 }}>
                                        {'State'}
                                    </Text>
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: 12, marginTop: 5 }}>
                                        {app.state}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 11 }}>
                                        {'Product(s)'}
                                    </Text>
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: 12, marginTop: 5 }}>
                                        {this.displayName(app.product)}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )
                )
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(246,248,249,0.98)',
    },
    cardWrap: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 1,},
        shadowColor: 'rgba(0,0,0,0.07)',
        shadowOpacity: 14.0,
    },
    sectionTop: {
        width: '100%',
        flexDirection: 'row',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    sectionBottom: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 20,
    },
    sectionTopBody: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    appNameStyle: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 15,
        fontWeight: '600'
    },
    appAcnStyle: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 10,
        marginTop: 5
    },
    statusNameContainer: {
        backgroundColor: '#F27A54',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
        alignItems: 'center'
    },
    statusNameStyle: {
        color: 'white',
        fontSize: 13,
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryStyle: {
        fontSize: 10,
        color: '#FF5050',
        marginTop: 5
    },
    loadingWrap: {
        backgroundColor: '#dadad9',
        width: 300,
        height: 250,
        //flex: 1,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 1,},
        shadowColor: 'rgba(0,0,0,0.07)',
        shadowOpacity: 14.0,
    },
});