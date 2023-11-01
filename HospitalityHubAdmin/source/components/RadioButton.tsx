import React, { useMemo, useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

export default function RadioButton({label1,label2,Direction}:any) {

    const radioButtons: RadioButtonProps[] = useMemo(( ) => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: label1,
            value: 'option1',
            labelStyle:{marginLeft:15,fontSize:20}
        },
        {
            id: '2',
            label: label2,
            value: 'option2',
            labelStyle:{marginLeft:15,fontSize:20}
        },
    ]),
    
    []);

    const [selectedId, setSelectedId] = useState<string | undefined>();

    return (
        <>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            containerStyle={{flexDirection:Direction,justifyContent:'space-around'}}
        />
        </>
    );

}