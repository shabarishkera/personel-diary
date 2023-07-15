
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { fetchalldiary } from '../backend/Database';

function Homepage() {
  const [items,setitems]=useState({});
  useEffect(()=>{
    async function inititems()
    {
const result=await fetchalldiary();
console.log(result);
var tempitem={};
for(let i=0;i<result.rows._array;i++)
{
  ///get all rows and addd to temp aarry 
}

    }
     inititems();
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected='2022-05-10'
        items={{
          '2022-05-10': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
          '2022-12-02': [{name: 'Writing'}]
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});

export default Homepage;