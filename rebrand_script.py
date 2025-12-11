import os
import re

# Define the replacements
replacements = {
    "Zugi's Treats": "Priscy's Bakes 'n' Treats",
    "Zugi": "Priscy",
    "+234 902 754 3070": "+234 807 070 6087",
    "+2349027543070": "+2348070706087",
    "https://wa.me/2349027543070": "https://wa.me/2348070706087",
    "tel:+2349027543070": "tel:+2348070706087",
    "hello@zugistreats.com": "hello@priscysbakes.com",  # Assuming email change based on rebrand
    "zugistreats.com": "priscysbakes.com",
    "Zugi's Cakes & Treats": "Priscy's Bakes 'n' Treats",
    "Zugi's Cakes and Treats": "Priscy's Bakes 'n' Treats",
    "zugistreats": "priscysbakes",
    "med_zugi": "priscy_bakes",  # Instagram handle
    "@zugi2k2": "@priscy_bakes",  # TikTok handle
    "share/171UDcBNAR/": "share/new_facebook_link/",  # Placeholder for Facebook, as it's specific
    "Achara Layout, Enugu": "Lagos",  # Address change to Lagos
    "Enugu State, Nigeria": "Lagos, Nigeria"
}

# Function to replace in file
def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()

        original_content = content
        for old, new in replacements.items():
            content = content.replace(old, new)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated: {filepath}")
        else:
            print(f"No changes needed: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

# Walk through all files in the directory
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith(('.jsx', '.js', '.html', '.md', '.json', '.css')):
            filepath = os.path.join(root, file)
            replace_in_file(filepath)

print("Rebranding complete!")
