
import json

def merge_company_data(input_file_path, output_file_path):
    # Load JSON data from file
    with open(input_file_path, 'r') as file:
        data = json.load(file)
    
    company_list = data['companyList']
    company_positions = {cp['company'].lower(): cp for cp in data['companyPositions']}
    
    merged_data = []
    for company in company_list:
        company_name = company['Company Name'].lower()
        if company_name in company_positions:
            # Merge company info with its position
            merged_company = {**company, **company_positions[company_name]}
            merged_data.append(merged_company)
        else:
            # Include companies without a position entry
            merged_data.append(company)
    
    # Output the merged data to a file
    with open(output_file_path, 'w') as file:
        json.dump(merged_data, file, indent=4)
    
    return output_file_path

# Example usage
input_file_path = '/Users/zubin/coding/DEMO-Website-S24/temp/output_file.json'  # Update this to the path of your JSON file
output_file_path = './merged_output_file.json'  # Update this to your desired output file path
merge_company_data(input_file_path, output_file_path)
