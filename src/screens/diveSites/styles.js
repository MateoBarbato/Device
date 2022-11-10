import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      },
      empty: {
        fontSize: 16,
        textAlign: "center",
        color: colors.text,
      },
});