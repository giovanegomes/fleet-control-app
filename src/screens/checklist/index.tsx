import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { z } from "zod";
import { Form } from "../../components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./styles";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const checklistSchema = z.object({
  vehicle: z.string().nonempty('Selecione o veículo'),
  date: z.date(),
  tires: z.boolean().transform((value) => !!value),
  lights: z.boolean().transform((value) => !!value),
  brakes: z.boolean().transform((value) => !!value),
  body: z.boolean().transform((value) => !!value),
  notes: z.string().nonempty('Tem itens da vistoria pendentes, informe detalhes sobre o problema.'),
});

const DEFAULT_VALUES = {
  vehicle: "",
  date: new Date(),
  tires: false,
  lights: false,
  brakes: false,
  body: false,
  notes: "",
};

type ChecklistInputs = z.infer<typeof checklistSchema>;

const VEHICLES = [
  { label: 'Onix', value: 'onix' },
  { label: 'Astra', value: 'astra' },
  { label: 'Civic', value: 'civic' },
];

export function ChecklistScreen() {
  const navigation = useNavigation();

  const form = useForm<ChecklistInputs>({
    resolver: zodResolver(checklistSchema),
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit } = form;
  
  const submit = async (data: ChecklistInputs) => {
    console.log("data", data);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcons
          name="check" 
          size={25} 
          onPress={handleSubmit(submit)}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Form form={form} schema={checklistSchema} defaultValues={DEFAULT_VALUES}>
        <Form.Select
          name="vehicle"
          label="Veículo"
          options={VEHICLES}
          placeholder="Selecione o veículo"
        />
        <Form.DatePicker name="date" label="Data da vistoria" />
        <View style={styles.warning}>
          <Text style={styles.warningText}>Verifique os itens da vistoria e assinale os que estão de acordo.</Text>
          <Text style={styles.warningText}>Caso encontre algum problema descreva os detalhes no campo de observações.</Text>
        </View>
        <View>
          <Form.Checkbox name="tires" label="Pneus" />
          <Form.Checkbox name="lights" label="Luzes" />
          <Form.Checkbox name="brakes" label="Freios" />
          <Form.Checkbox name="body" label="Lataria" />
        </View>
        <Form.TextInput name="notes" label="Observações:"/>
      </Form>
    </View>
  )
}