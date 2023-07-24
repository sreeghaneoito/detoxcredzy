import {View, Text, SafeAreaView, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {style, qtn} from './Kba.style';
import Header from './partials/Header';
import {BottomOptions} from '../../../../components';
import {useToastHook} from '../../../../hooks/useToastHook';
import {navigate} from '../../../../routes/navigations';
import {routeEnum} from '../../../../enums/route.enum';
import ErrorModal from './partials/ErrorModal';
import {RootState} from '../../../../redux/store/root.reducer';
import {kbaSlice} from '../../../../redux/slices/kba.slice';

const KbaQuestions = () => {
  // local states
  const [answers, setAnswers] = useState({});

  // state from hooks
  const {showToast} = useToastHook();
  const dispatch = useDispatch();

  // state from store
  const {
    questions: {response},
    submitAnswers: {loading},
  } = useSelector((State: RootState) => State.kba);

  /**
   * Adding each answer to the answers object declared above, If the question ID is already present then the answer will be added to the existing key.
   * @param qtnID The Question ID
   * @param anwID The answer ID
   */
  const addAnswers = (qtnID: string, anwID: string) => {
    setAnswers({...answers, [qtnID]: anwID});
  };

  /**
   * Sent the answers to the saga. If any answers is missing it shows a toast message, else the dispatch will work
   */
  const submitAnswers = () => {
    if (Object.keys(answers).length < 3) {
      showToast('Please answer all the qusetions');
      return;
    }
    dispatch(kbaSlice.actions.saveSwaAnswers({answers: answers}));
  };
  return (
    <>
      <SafeAreaView style={style.container}>
        <View style={style.container}>
          <FlatList
            data={response}
            ListHeaderComponent={() => {
              return (
                <Header desc="Let’s double-check we pulled the correct credit profile" />
              );
            }}
            renderItem={({item, index}) => {
              return (
                <View style={qtn.questionBlock}>
                  <Text style={qtn.question}>
                    <Text style={qtn.qtnNumber}>{index + 1}. </Text>
                    {item.text}
                  </Text>
                  <View style={qtn.answerBlock}>
                    {item.answers.map((obj, index) => {
                      return (
                        <Pressable
                          style={qtn.answers}
                          onPress={() => {
                            addAnswers(item.id, obj.id);
                          }}
                          key={index}>
                          <View style={qtn.radio}>
                            {Object.values(answers).includes(obj.id) && (
                              <View style={qtn.radioActive} />
                            )}
                          </View>
                          <Text>{obj.text}</Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <BottomOptions
          buttonAction={submitAnswers}
          ghostAction={() => {
            navigate(routeEnum.KBA);
          }}
          ghostlabel="Back"
          mainlabel="countinue"
          loading={loading}
        />
      </SafeAreaView>
      <ErrorModal />
    </>
  );
};

export default KbaQuestions;
