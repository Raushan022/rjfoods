// components/PDFDocument.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "red",
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    padding: 5,
    border: "1px solid black",
    width: "50%",
  },
});

const PDFDocument = ({ formData, selectedItemsWithCategory }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>RJEvents</Text>

      <View style={styles.section}>
        <Text>
          <Text style={styles.heading}>Name:</Text> {formData.name}
        </Text>
        <Text>
          <Text style={styles.heading}>Address:</Text> {formData.address}
        </Text>
        <Text>
          <Text style={styles.heading}>Date of Event:</Text>{" "}
          {formData.eventDate}
        </Text>
        <Text>
          <Text style={styles.heading}>Number of People:</Text>{" "}
          {formData.numberOfPeople}
        </Text>
      </View>

      {selectedItemsWithCategory.map((group) => (
        <View key={group.category} style={styles.section}>
          <Text style={styles.heading}>{group.category}</Text>
          <View style={styles.table}>
            {group.items.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.en}</Text>
                <Text style={styles.tableCell}>{item.hi}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default PDFDocument;
