import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import BaseText from './BaseText';
import useAppTheme from '@src/hooks/useAppTheme';

type TableProps<K> = {
  data: K[];
  columns: { key: keyof Omit<K, 'id'>; displayName: string }[];
};

const ITEM_PER_PAGE = 4;

const Table = <K extends { id: string }>({ data, columns }: TableProps<K>) => {
  const theme = useAppTheme();
  const [page, setPage] = React.useState<number>(0);

  const numberOfPages = data?.length > 0 ? Math.ceil(data.length / ITEM_PER_PAGE) : 0;
  const from = page * ITEM_PER_PAGE;
  const to = Math.min((page + 1) * ITEM_PER_PAGE, data.length);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.sectionTitleContainer,
          { borderBottomColor: theme.colors.sectionBorderColor },
        ]}
      >
        <BaseText variant="titleTwo">Overall Summary</BaseText>
      </View>
      {data && data?.length > 0 ? (
        <DataTable>
          <DataTable.Header style={styles.header}>
            {columns?.length > 0 &&
              columns.map((col, index) => (
                <DataTable.Title
                  style={[
                    styles.columnHeader,
                    {
                      justifyContent:
                        index === 0
                          ? 'flex-start'
                          : index === columns.length - 1
                            ? 'flex-end'
                            : 'center',
                    },
                  ]}
                  key={index}
                >
                  {col.displayName}
                </DataTable.Title>
              ))}
          </DataTable.Header>

          {data?.length > 0 &&
            data.slice(from, to).map((item) => (
              <DataTable.Row key={item.id} style={styles.row}>
                {columns.map((col, index) => (
                  <DataTable.Cell
                    style={[
                      styles.cell,
                      {
                        justifyContent:
                          index === 0
                            ? 'flex-start'
                            : index === columns.length - 1
                              ? 'flex-end'
                              : 'center',
                      },
                    ]}
                    key={index}
                    numeric={typeof item[col.key] === 'number'}
                  >
                    <BaseText
                      variant="bodyMedium"
                      style={{
                        color:
                          item[col.key] === 'success'
                            ? theme.colors.successColor
                            : item[col.key] === 'error'
                              ? theme.colors.errorColor
                              : theme.colors.defaultCellColor,
                      }}
                    >
                      {item[col.key] as React.ReactNode}
                    </BaseText>
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
            ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={numberOfPages}
            onPageChange={setPage}
            label={`${from + 1}-${to} of ${data.length}`}
          />
        </DataTable>
      ) : (
        <View style={styles.noAttemptsContainer}>
          <BaseText variant="subTitleTwo">No Attempts yet</BaseText>
        </View>
      )}
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  sectionTitleContainer: {
    borderBottomWidth: 1,
    width: '90%',
    marginBottom: 16,
  },
  header: {
    justifyContent: 'space-between',
    width: '100%',
  },
  columnHeader: {
    alignItems: 'center',
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noAttemptsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
