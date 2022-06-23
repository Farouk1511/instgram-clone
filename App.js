import { StyleSheet, View, Platform, Modal, AsyncStorage } from "react-native";

import Constants from "expo-constants";

import Feed from "./screens/Feed";

import { useEffect, useState } from "react";
import Comments from "./components/Comments";

const ASYNC_STORAGE_COMMENTS_KEY = "ASYNC_STORAGE_COMMENTS_KEY";

export default function App() {
  const [commentsForItem, setCommentsForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openCommentScreen = (id) => {
    setShowModal(true);
    setSelectedId(id);
  };

  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  const onSubmitComment = (text) => {
    const comments = commentsForItem[selectedId] || [];

    const updates = {
      ...commentsForItem,
      [selectedId]: [...comments, text],
    };

    setCommentsForItem(updates);

    try{
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY,JSON.stringify(updates))
    }catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const comments = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);

        setCommentsForItem(comments ? JSON.parse(comments) : {});
      } catch (err) {
        console.log(err);
      }
    };

    getComments();
  }, []);

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeCommentScreen}
      >
        <Comments
          style={styles.container}
          comments={commentsForItem[selectedId] || []}
          onClose={closeCommentScreen}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
      {/* <CardList item={DATA}/> */}
    </View>
  );
}

const platformVersion =
  Platform.OS === "ios" ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    marginTop: Constants.statusBarHeight,
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === "android" || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },

  comments: {
    flex: 1,
    marginTop:
      Platform.OS === "ios" && platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
});
