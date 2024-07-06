import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../NavBar";
import UserWidget from "../../global-component/widgets/UserWidget.jsx";
import MyPostWidget from "../../global-component/widgets/MyPostWidget.jsx";
import PostsWidget from "../../global-component/widgets/PostsWidget.jsx";
import AdvertWidget from "../../global-component/widgets/AdvertWidget.jsx";
import FriendListWidget from "../../global-component/widgets/FriendListWidget.jsx";
import useHomePageFetch from "./useHomePageFetch.js";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useHomePageFetch();
  const _id = user?._id;
  const picturePath = user?.picturePath;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
