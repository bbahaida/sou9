import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
export interface Message {
  id: number;
  title: string;
  description: string;
  image: any;
}

const initialMessages: Message[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus saepe non sapiente quia officia rerum, rem, nulla quod in laborum assumenda aliquam molestiae quidem incidunt suscipit maxime dignissimos veniam cum nisi commodi eum cupiditate repudiandae delectus accusamus. Unde, modi voluptatibus placeat accusantium autem nihil sequi facilis nobis, nemo aliquid eaque mollitia qui. Iste magni laudantium voluptatum ipsum in nobis veritatis corporis vitae cupiditate dolorum inventore asperiores odit ullam eum molestias nostrum qui cumque, consequatur illum, consequuntur illo voluptas. Saepe eum laboriosam vitae sequi veritatis impedit asperiores quibusdam quaerat. Pariatur veritatis consequatur deleniti dolorum optio, beatae accusamus? Veritatis ab commodi harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse deserunt libero ipsa, recusandae iusto nihil eius reiciendis laboriosam porro cumque natus soluta rem ea, molestias nostrum consequuntur aliquam fuga fugit!",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus saepe non sapiente quia officia rerum, rem, nulla quod in laborum assumenda aliquam molestiae quidem incidunt suscipit maxime dignissimos veniam cum nisi commodi eum cupiditate repudiandae delectus accusamus. Unde, modi voluptatibus placeat accusantium autem nihil sequi facilis nobis, nemo aliquid eaque mollitia qui. Iste magni laudantium voluptatum ipsum in nobis veritatis corporis vitae cupiditate dolorum inventore asperiores odit ullam eum molestias nostrum qui cumque, consequatur illum, consequuntur illo voluptas. Saepe eum laboriosam vitae sequi veritatis impedit asperiores quibusdam quaerat. Pariatur veritatis consequatur deleniti dolorum optio, beatae accusamus? Veritatis ab commodi harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse deserunt libero ipsa, recusandae iusto nihil eius reiciendis laboriosam porro cumque natus soluta rem ea, molestias nostrum consequuntur aliquam fuga fugit!",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default MessageScreen;
