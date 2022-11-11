export default {
    'univ': {
        'univ_actor': ['id', 'person_id', 'username', 'campus_id'],
        'person': ['id', 'first_name', 'last_name', 'email', 'password', 'doc_number', 'doc_type_id', 'address_id'],
        'doc_type': ['id', 'type'],
        'campus': ['id', 'campus', 'address_id'],
        'address': ['id', 'address_line', 'zip_code', 'city_id'],
        'city': ['id', 'city', 'department_id'],
        'department': ['id', 'department'],
        'payment_concept': ['id', 'concept', 'amount'],
        'payment_concept_person': ['id', 'person_id', 'payment_concept_id'],
    },
    'paidify': {
        'address': ['id', 'address_line', 'zip_code', 'city_id'],
        'payment_method': ['id', 'owner', 'card_number', 'card_type_id', 'card_category_id', 'user_id'],
        'card_type': ['id', 'type'],
        'card_category': ['id', 'category'],
        'operation_status': ['id', 'status'],
        'invoice': ['id', 'date', 'due_date', 'description', 'invoice_number', 'payment_id'],
        'payment': ['id', 'credit_card_auth_code', 'amount', 'balance', 'date', 'effective_date', 'gateway_date', 'reference_number', 'num_installments', 'fulfilled', 'operation_status_id', 'payment_concept_id', 'campus_id', 'card_type_id', 'user_id', 'guest_id'],
        'guest': ['id', 'first_name', 'last_name', 'email', 'doc_number', 'doc_type_id', 'address_id'],
        'user': ['id', 'person_id', 'user_admin_id'],
        'user_admin': ['id', 'username', 'password'],
    }
}