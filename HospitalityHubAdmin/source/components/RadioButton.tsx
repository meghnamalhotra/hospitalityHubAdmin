import React, { useMemo, useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

export default function RadioButton() {

    const radioButtons: RadioButtonProps[] = useMemo(( ) => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Enter Property ',
            value: 'option1',
            labelStyle:{marginLeft:30}
        },
        {
            id: '2',
            label: ' Private Property',
            value: 'option2',
            labelStyle:{marginLeft:20}
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
            containerStyle={{margin:20,right:80}}
        />
        </>
    );

}