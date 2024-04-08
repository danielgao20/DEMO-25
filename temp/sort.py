import json

def sort_data_by_id(input_file_path, output_file_path):
    # Read the data from the input file
    with open(input_file_path, 'r') as file:
        data = json.load(file)
    
    # Ensure all entries have an 'id' before sorting
    filtered_data = [item for item in data if 'id' in item]
    sorted_data = sorted(filtered_data, key=lambda x: x['id'])
    
    # Write the sorted data to the output file
    with open(output_file_path, 'w') as file:
        json.dump(sorted_data, file, indent=4)
# Example usage
input_file_path = '/Users/zubin/coding/DEMO-Website-S24/temp/merged_output_file.json'  # Update this to your input file path
output_file_path = 'sorted_output.json'  # Update this to your desired output file path
sort_data_by_id(input_file_path, output_file_path)
