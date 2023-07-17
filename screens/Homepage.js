
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
import { useNavigation } from '@react-navigation/native';
function Homepage() {
  const date=new Date();
    
  var dateFormat = date.getFullYear() + "-" +((date.getMonth()+1).length != 2 ? "0" + (date.getMonth() + 1) : (date.getMonth()+1)) + "-" + (date.getDate().toLocaleString().length != 2 ?"0" + date.getDate() : date.getDate());
 
  const navigator=useNavigation();
  const handleEditDiary=async(item)=>
  {

navigator.navigate("editDiaryScreen",{"dateval":item.date,"diarytext":item.name});
  }
  const [items,setitems]=useState({});
  useEffect(()=>{
    async function inititems()
    {
const result=await fetchalldiary();

console.log(result.rows._array.length);
var tempitem={};
for(let i=0;i<result.rows._array.length;i++)
{
 const array=result.rows._array;
 tempitem[`${array[i].dateinfo}`]=[{"name":array[i].data,"date":array[i].dateinfo}];

}
console.log(tempitem);
setitems(tempitem);
    }
     inititems();
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected={dateFormat}
        items={items}
        renderItem={(item, isFirst) => (
          <TouchableOpacity onLongPress={()=>handleEditDiary(item)} style={styles.item}>
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