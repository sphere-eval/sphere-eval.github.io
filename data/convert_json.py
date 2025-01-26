import pandas as pd 
import json 


structured_field_data = [
    {"name": "Component", "category": "what"},
    {"name": "Design Goal", "category": "what"},
    {"name": "Scope", "category": "how"},
    {"name": "Method", "category": "how"},
    {"name": "Human", "category": "who"},
    {"name": "Automated", "category": "who"},
    {"name": "Time Scale", "category": "when"},
    {"name": "Validation", "category": "meta-how"}
]


df = pd.read_csv("annotated_papers.csv")

necessary_fields = ['Paper', 'URL', 'Year', 'Venue']
other_fields = [ele for ele in df.columns if ele not in necessary_fields]

for field in other_fields:
    df[field] = df[field].apply(lambda x: [ele.strip() for ele in x.split(",")] if isinstance(x, str) else [])

for field in structured_field_data:
    all_values = list(set(sum(df[field['name']].dropna().tolist(), [])))
    field['values'] = [{"value": ele, "label": ele} for ele in all_values]

df['ID'] = [f"{i}" for i in range(len(df))]
df.to_json("../src/app/papers/papers.json", orient="records", indent=4)

with open("../src/app/papers/structured_fields.json", "w") as f:
    json.dump(structured_field_data, f, indent=4)