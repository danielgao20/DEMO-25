import pandas as pd
import json

# Load the spreadsheet
file_path = '/Users/zubin/coding/DEMO-Website-S24/temp/demo.xlsx'
output_file_path = './output_file.json'  # Specify your desired output file path

spreadsheet = pd.read_excel(file_path)

# Define the base columns to extract from the spreadsheet
base_columns = [
    "Company Name:",
    "Company Industry:",
    "Origin Year of Company:",
    "Company Website:",
    "Founder Full Name*:*",
    "Founder Email Address:",
    "Founder LinkedIn:"
]

# Additional columns to check for and potentially include
additional_columns = [
    "Do you have any Co-Founders?",
    "Co-Founder Full Name:",
    "Co-Founder LinkedIn:"
]

# Extract the necessary data
data_to_include = spreadsheet[base_columns + additional_columns]

# Initialize an empty list to hold the processed company information
processed_data = []

for _, row in data_to_include.iterrows():
    company_info = {
        "Company Name": row["Company Name:"],
        "Company Industry": row["Company Industry:"],
        "Origin Year of Company": row["Origin Year of Company:"],
        "Company Website": row["Company Website:"],
        "Founder Full Name": row["Founder Full Name*:*"],
        "Founder Email Address": row["Founder Email Address:"],
        "Founder LinkedIn": row["Founder LinkedIn:"]
    }
    
    # If there are co-founders, add their information
    if row["Do you have any Co-Founders?"] in ['Yes', 'yes', True, 1]:
        company_info["Co-Founder Full Name"] = row.get("Co-Founder Full Name:", None)
        company_info["Co-Founder LinkedIn"] = row.get("Co-Founder LinkedIn:", None)
    
    processed_data.append(company_info)

# Write the processed data to a JSON file
with open(output_file_path, 'w') as f:
    json.dump(processed_data, f, ensure_ascii=False, indent=4)

print(f"Data has been successfully exported to {output_file_path}.")
