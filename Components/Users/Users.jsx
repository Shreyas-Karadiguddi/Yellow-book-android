// import React from 'react';
// import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Card, Text } from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

// const { width } = Dimensions.get('window');

// const sampleUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
//     { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
//     { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
// ];

// const Users = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 <Card style={styles.headerCard}>
//                     <Card.Content>
//                         <Text style={styles.headline}>Users</Text>
//                     </Card.Content>
//                 </Card>

//                 <Card style={styles.mainCard}>
//                     <Card.Content>
//                         {sampleUsers.map((user) => (
//                             <Card key={user.id} style={styles.subCard}>
//                                 <View style={styles.userRow}>
//                                     <View style={styles.iconWrapper}>
//                                         <Icon name="account-circle" size={30} color="#2962FF" />
//                                     </View>
//                                     <View style={styles.userDetails}>
//                                         <Text style={styles.userName}>{user.name}</Text>
//                                         <Text style={styles.userEmail}>{user.email}</Text>
//                                         {/* <Text style={styles.userRole}>{user.role}</Text> */}
//                                     </View>
//                                 </View>
//                             </Card>
//                         ))}
//                     </Card.Content>
//                 </Card>

//             </ScrollView>
//         </View>
//     );
// };

// export default Users;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#e8ecf4',
//         paddingVertical: 40,
//     },
//     scrollContainer: {
//         paddingHorizontal: width * 0.05,
//     },

//     // ✅ Header Card
//     headerCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         // elevation: 4,
//         marginBottom: 10,
//         // paddingVertical: 5,
//     },
//     headline: {
//         textAlign: 'center',
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },

//     // ✅ Main Card that holds all sub-cards
//     mainCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         elevation: 4,
//         paddingVertical: 10,
//     },

//     // ✅ Each User Sub-Card
//     subCard: {
//         backgroundColor: '#F9FAFB',
//         borderRadius: 12,
//         padding: 12,
//         marginBottom: 12,
//         elevation: 1,
//     },
//     userRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconWrapper: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: '#EAF1FF',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 12,
//     },
//     userDetails: {
//         flex: 1,
//     },
//     userName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     userEmail: {
//         fontSize: 14,
//         color: '#6B7280',
//         marginTop: 2,
//     },
//     userRole: {
//         fontSize: 13,
//         color: '#374151',
//         marginTop: 2,
//         fontStyle: 'italic',
//     },
// });

// import React from 'react';
// import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Card, Text, Divider } from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

// const { width } = Dimensions.get('window');

// const sampleUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
//     { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
//     { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
// ];

// const Users = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 <Card style={styles.headerCard}>
//                     <Card.Content>
//                         <Text style={styles.headline}>Users</Text>
//                     </Card.Content>
//                 </Card>

//                 <Card style={styles.mainCard}>
//                     <Card.Content>
//                         {sampleUsers.map((user, index) => (
//                             <View key={user.id}>
//                                 <View style={styles.userRow}>
//                                     <View style={styles.iconWrapper}>
//                                         <Icon name="account-circle" size={30} color="#2962FF" />
//                                     </View>
//                                     <View style={styles.userDetails}>
//                                         <Text style={styles.userName}>{user.name}</Text>
//                                         <Text style={styles.userEmail}>{user.email}</Text>
//                                     </View>
//                                 </View>
//                                 {index !== sampleUsers.length - 1 && <Divider style={{ marginVertical: 8 }} />}
//                             </View>
//                         ))}
//                     </Card.Content>
//                 </Card>
//             </ScrollView>
//         </View>
//     );
// };

// export default Users;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#e8ecf4',
//         paddingVertical: 40,
//     },
//     scrollContainer: {
//         paddingHorizontal: width * 0.05,
//     },
//     headerCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         marginBottom: 10,
//     },
//     headline: {
//         textAlign: 'center',
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     mainCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         elevation: 4,
//         paddingVertical: 10,
//     },
//     userRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconWrapper: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: '#EAF1FF',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 12,
//     },
//     userDetails: {
//         flex: 1,
//     },
//     userName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     userEmail: {
//         fontSize: 14,
//         color: '#6B7280',
//         marginTop: 2,
//     },
// });

// import React from 'react';
// import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Card, Text } from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

// const { width } = Dimensions.get('window');
// const cardWidth = (width * 0.9) / 2 - 10;

// const sampleUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
//     { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
//     { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
// ];

// const Users = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 <Card style={styles.headerCard}>
//                     <Card.Content>
//                         <Text style={styles.headline}>Users</Text>
//                     </Card.Content>
//                 </Card>

//                 <View style={styles.gridContainer}>
//                     {sampleUsers.map((user) => (
//                         <Card key={user.id} style={styles.gridCard}>
//                             <Card.Content style={{ alignItems: 'center' }}>
//                                 <Icon name="account-circle" size={40} color="#2962FF" />
//                                 <Text style={styles.userName}>{user.name}</Text>
//                                 <Text style={styles.userEmail}>{user.email}</Text>
//                             </Card.Content>
//                         </Card>
//                     ))}
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// export default Users;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#e8ecf4',
//         paddingVertical: 40,
//     },
//     scrollContainer: {
//         paddingHorizontal: width * 0.05,
//     },
//     headerCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         marginBottom: 10,
//     },
//     headline: {
//         textAlign: 'center',
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     gridContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     },
//     gridCard: {
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         elevation: 2,
//         width: cardWidth,
//         marginBottom: 12,
//         paddingVertical: 10,
//     },
//     userName: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#2962FF',
//         textAlign: 'center',
//         marginTop: 8,
//     },
//     userEmail: {
//         fontSize: 12,
//         color: '#6B7280',
//         textAlign: 'center',
//     },
// });


// import React from 'react';
// import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Card, Text } from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

// const { width } = Dimensions.get('window');

// const sampleUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
//     { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
//     { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
// ];

// const Users = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 <Card style={styles.headerCard}>
//                     <Card.Content>
//                         <Text style={styles.headline}>Users</Text>
//                     </Card.Content>
//                 </Card>

//                 {sampleUsers.map((user) => (
//                     <Card key={user.id} style={styles.profileCard}>
//                         <Card.Content style={styles.profileContent}>
//                             <View style={styles.iconWrapper}>
//                                 <Icon name="account-circle" size={40} color="#2962FF" />
//                             </View>
//                             <View style={styles.userDetails}>
//                                 <Text style={styles.userName}>{user.name}</Text>
//                                 <Text style={styles.userEmail}>{user.email}</Text>

//                                 {/* ✅ Role Badge */}
//                                 {/* <View
//                                     style={[
//                                         styles.roleBadge,
//                                         user.role === 'Admin'
//                                             ? styles.adminBadge
//                                             : user.role === 'Editor'
//                                                 ? styles.editorBadge
//                                                 : styles.viewerBadge,
//                                     ]}
//                                 >
//                                     <Text style={styles.badgeText}>{user.role}</Text>
//                                 </View> */}
//                             </View>
//                         </Card.Content>
//                     </Card>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// };

// export default Users;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#e8ecf4',
//         paddingVertical: 40,
//     },
//     scrollContainer: {
//         paddingHorizontal: width * 0.05,
//     },
//     headerCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         marginBottom: 10,
//     },
//     headline: {
//         textAlign: 'center',
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     profileCard: {
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         elevation: 2,
//         marginBottom: 12,
//         paddingVertical: 8,
//     },
//     profileContent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconWrapper: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: '#EAF1FF',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 12,
//     },
//     userDetails: {
//         flex: 1,
//     },
//     userName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     userEmail: {
//         fontSize: 14,
//         color: '#6B7280',
//         marginVertical: 2,
//     },

//     // ✅ Role Badge
//     roleBadge: {
//         paddingHorizontal: 8,
//         paddingVertical: 2,
//         borderRadius: 8,
//         alignSelf: 'flex-start',
//     },
//     badgeText: {
//         fontSize: 12,
//         color: '#fff',
//         fontWeight: '600',
//     },
//     adminBadge: { backgroundColor: '#FF5252' },
//     editorBadge: { backgroundColor: '#2962FF' },
//     viewerBadge: { backgroundColor: '#6B7280' },
// });


// import React from 'react';
// import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Card, Text } from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

// const { width } = Dimensions.get('window');

// const sampleUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
//     { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
//     { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
// ];

// const Users = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollContainer}>

//                 {/* Header */}
//                 <Card style={styles.headerCard}>
//                     <Card.Content>
//                         <Text style={styles.headline}>Users</Text>
//                     </Card.Content>
//                 </Card>

//                 {/* Main Users Card */}
//                 <Card style={styles.mainCard}>
//                     <Card.Content>
//                         {sampleUsers.map((user) => (
//                             <Card key={user.id} style={styles.subCard}>
//                                 <View style={styles.userRow}>
//                                     <View style={styles.iconWrapper}>
//                                         <Icon name="account-circle" size={30} color="#2962FF" />
//                                     </View>
//                                     <View style={styles.userDetails}>
//                                         <Text style={styles.userName}>{user.name}</Text>
//                                         <Text style={styles.userEmail}>{user.email}</Text>
//                                     </View>
//                                 </View>
//                             </Card>
//                         ))}
//                     </Card.Content>
//                 </Card>
//             </ScrollView>
//         </View>
//     );
// };

// export default Users;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#e8ecf4',
//         paddingVertical: 40,
//     },
//     scrollContainer: {
//         paddingHorizontal: width * 0.05,
//     },
//     headerCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         marginBottom: 12,
//         elevation: 2,
//     },
//     headline: {
//         textAlign: 'center',
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     mainCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         elevation: 3,
//         paddingVertical: 10,
//     },
//     subCard: {
//         backgroundColor: '#F4F6FB',
//         borderRadius: 12,
//         padding: 12,
//         marginBottom: 12,
//         elevation: 1,
//     },
//     userRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconWrapper: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: '#EAF1FF',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 12,
//     },
//     userDetails: {
//         flex: 1,
//     },
//     userName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#2962FF',
//     },
//     userEmail: {
//         fontSize: 14,
//         color: '#6B7280',
//         marginTop: 2,
//         fontWeight: 'bold'
//     },
// });

// import React from 'react';
// import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { Card, Text } from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

// const { width } = Dimensions.get('window');

// const sampleUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
//     { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
//     { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
// ];

// const Users = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollContainer}>

//                 {/* Header */}
//                 <Card style={styles.headerCard}>
//                     <Card.Content>
//                         <Text style={styles.headline}>Users</Text>
//                     </Card.Content>
//                 </Card>

//                 {/* Main Users Card */}
//                 <Card style={styles.mainCard}>
//                     <Card.Content>
//                         {sampleUsers.map((user) => (
//                             <Card key={user.id} style={styles.subCard}>
//                                 <View style={styles.userRow}>
//                                     <View style={styles.iconWrapper}>
//                                         <Icon name="account-circle" size={30} color="#7C83FD" />
//                                     </View>
//                                     <View style={styles.userDetails}>
//                                         <Text style={styles.userName}>{user.name}</Text>
//                                         <Text style={styles.userEmail}>{user.email}</Text>
//                                     </View>
//                                 </View>
//                             </Card>
//                         ))}
//                     </Card.Content>
//                 </Card>
//             </ScrollView>
//         </View>
//     );
// };

// export default Users;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#e8ecf4',
//         paddingVertical: 40,
//     },
//     scrollContainer: {
//         paddingHorizontal: width * 0.05,
//     },
//     headerCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         marginBottom: 12,
//         elevation: 2,
//     },
//     headline: {
//         textAlign: 'center',
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#7C83FD',
//     },
//     mainCard: {
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         elevation: 3,
//         paddingVertical: 10,
//     },
//     subCard: {
//         backgroundColor: '#F7F8FF',
//         borderRadius: 12,
//         padding: 12,
//         marginBottom: 12,
//         elevation: 1,
//     },
//     userRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconWrapper: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: '#E4E7FF',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 12,
//     },
//     userDetails: {
//         flex: 1,
//     },
//     userName: {
//         fontSize: 18,
//         fontWeight: '600',
//         color: '#4B4F72',
//     },
//     userEmail: {
//         fontSize: 14,
//         color: '#707793',
//         marginTop: 2,
//     },
// });

import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Icon from '@react-native-vector-icons/material-design-icons';

const { width } = Dimensions.get('window');

const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
    { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
];

const Users = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* ✅ HEADER ROW */}
                <View style={styles.headerRow}>
                    <Text style={styles.headline}>Users</Text>

                    {/* Profile Icon */}

                    {/* <Icon name="account-circle" size={34} color="#2962FF" /> */}
                    <Button icon='plus' style={styles.profileIconWrapper} textColor='#2962FF'>CREATE</Button>

                </View>

                {/* ✅ MAIN CARD FOR USERS */}
                <Card style={styles.mainCard}>
                    <Card.Content>
                        {sampleUsers.map((user) => (
                            <Card key={user.id} style={styles.subCard}>
                                <View style={styles.userRow}>
                                    <View style={styles.iconWrapper}>
                                        <Icon name="account-circle" size={30} color="#2962FF" />
                                    </View>
                                    <View style={styles.userDetails}>
                                        <Text style={styles.userName}>{user.name}</Text>
                                        <Text style={styles.userEmail}>{user.email}</Text>
                                    </View>
                                </View>
                            </Card>
                        ))}
                    </Card.Content>
                </Card>

            </ScrollView>
        </View>
    );
};

export default Users;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8ecf4',
        paddingTop: 40,
    },
    scrollContainer: {
        paddingHorizontal: width * 0.05,
        paddingBottom: 20,
    },

    /* ✅ Header Row */
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 4,
    },
    headline: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2962FF',
        marginLeft: 5
    },
    profileIconWrapper: {
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 30,
        elevation: 3,
        color: "#2962FF",
        marginRight: 5
    },

    /* ✅ Main Card that holds all sub-cards */
    mainCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        elevation: 4,
        paddingVertical: 10,
        height: 675
    },

    /* ✅ Each User Sub-Card */
    subCard: {
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        elevation: 1,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#EAF1FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    userDetails: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2962FF',
    },
    userEmail: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 2,
        fontWeight: 'bold'
    },
});


