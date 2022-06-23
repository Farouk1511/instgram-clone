import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import Card from "./Card";
import { getImageFromId } from "../utils/api";

const CardList = ({item,commentsForItem,onPressComments}) => {
  const keyExtractor = ({ id }) => id.string;

  const renderItem = ({ item: { id, author } }) => {
    const comments = commentsForItem[id]
    
    return(
      <Card
      fullname={author}
      image={{ uri: getImageFromId(id) }}
      linkText={`${comments?comments.length:0} Comments`}
      onPressLinkText = {() => onPressComments(id)}
    />
    )
   
  }

  return (
    <FlatList data={item} renderItem={renderItem} keyExtractor={keyExtractor} extraData={commentsForItem}/>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  commentsForItem:PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onPressComments:PropTypes.func.isRequired
};

export default CardList;
