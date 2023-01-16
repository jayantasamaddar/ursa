export const columns = [
  { id: '0', name: 'order', label: 'Order', width: 90 },
  { id: '1', name: 'date', label: 'Date', width: 160 },
  { id: '2', name: 'customer', label: 'Customer', type: 'number', width: 110 },
  { id: '3', name: 'total', label: 'Total', width: 90 },
  { id: '4', name: 'items', label: 'Items', type: 'number', width: 100 },
  { id: '5', name: 'delivery_method', label: 'Delivery Method', width: 160 },
  {
    id: '6',
    name: 'payment_status',
    label: 'Payment Status',
    type: 'number',
    width: 160
  },
  {
    id: '7',
    name: 'fulfillment_status',
    label: 'Fulfillment Status',
    type: 'number',
    width: 160
  },
  { id: '8', name: 'return_status', label: 'Return Status', width: 160 },
  { id: '9', name: 'tags', label: 'Tags', type: 'number', width: 90 }
];

export const rows = [
  {
    id: '1',
    order: 1234,
    date: 'Wednesday at 02:25 AM',
    customer: 'Jon Snow',
    total: '828.00',
    items: 1,
    fulfillment_status: 'Unfulfilled',
    payment_status: 'Pending',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '2',
    order: 5678,
    date: '2 Feb at 2:40 AM',
    customer: 'Cersei Lannister',
    total: '828.00',
    items: 1,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '3',
    order: 41415262,
    date: '3 Jan at 9:38 PM',
    customer: 'Jaime Lannister',
    total: '5904.95',
    items: 3,
    fulfillment_status: 'Cancelled',
    payment_status: 'Pending',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '4',
    order: 51515363,
    date: '2 Jan at 1:04 PM',
    customer: 'Arya Stark',
    total: '1598.00',
    items: 1,
    fulfillment_status: 'Unfulfilled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '5',
    order: 55535,
    date: '25 Dec at 12:17 AM',
    customer: 'Daenerys Targaryen',
    total: '3653.30',
    items: 2,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '6',
    order: 858685,
    date: '14 Nov at 08:50 PM',
    customer: 'Melisandre',
    total: '1499.00',
    items: 1,
    fulfillment_status: 'Cancelled',
    payment_status: 'Pending',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '7',
    order: 45235,
    date: '12 Nov at 11:50 PM',
    customer: 'Harry Potter',
    total: '1899.00',
    items: 1,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Pending',
    return_status: 'Returned',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '8',
    order: 7885784,
    date: '3 Nov at 10:18 PM',
    customer: 'Severus Snape',
    total: '1399.00',
    items: 1,
    fulfillment_status: 'Cancelled',
    payment_status: 'Pending',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '9',
    order: 95151,
    date: '3 Nov at 9:25 PM',
    customer: 'Albus Dumbledore',
    total: '2599.00',
    items: 1,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '10',
    order: 4321,
    date: 'Wednesday at 02:30 AM',
    customer: 'Minerva McGonagall',
    total: '828.00',
    items: 1,
    fulfillment_status: 'Unfulfilled',
    payment_status: 'Pending',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '11',
    order: 65428,
    date: '2 Feb at 2:41 AM',
    customer: 'Sirius Black',
    total: '828.00',
    items: 1,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Paid',
    return_status: 'Returned',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '12',
    order: 64152241,
    date: '3 Jan at 9:39 PM',
    customer: 'Mo Salah',
    total: '5904.95',
    items: 3,
    fulfillment_status: 'Cancelled',
    payment_status: 'Pending',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '13',
    order: 53615315,
    date: '2 Jan at 1:05 PM',
    customer: 'Sadio Mane',
    total: '1598.00',
    items: 1,
    fulfillment_status: 'Unfulfilled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '14',
    order: 32582,
    date: '25 Dec at 12:18 AM',
    customer: 'Diogo Jota',
    total: '3653.30',
    items: 2,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '15',
    order: 858685,
    date: '14 Nov at 08:51 PM',
    customer: 'Virgil Van Dijk',
    total: '1499.00',
    items: 1,
    fulfillment_status: 'Cancelled',
    payment_status: 'Pending',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '16',
    order: 55792,
    date: '12 Nov at 11:51 PM',
    customer: 'Fernando Torres',
    total: '1899.00',
    items: 1,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '17',
    order: 7885784,
    date: '5 Nov at 10:19 PM',
    customer: 'Luis Diaz',
    total: '1399.00',
    items: 1,
    fulfillment_status: 'Cancelled',
    payment_status: 'Paid',
    return_status: 'Return in Progress',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  },
  {
    id: '18',
    order: 95151,
    date: '3 Nov at 9:26 PM',
    customer: 'Bojack Horseman',
    total: '2599.00',
    items: 1,
    fulfillment_status: 'Fulfilled',
    payment_status: 'Pending',
    return_status: 'Returned',
    delivery_method: 'Free Shipping (3-7 Business Days)'
  }
];

export const views = [
  { id: '0', name: 'all', label: 'All', filters: [], default: true },
  {
    id: '1',
    name: 'unfulfilled',
    label: 'Unfulfilled',
    filters: [{ fulfillment_status: 'Unfulfilled' }]
  },
  {
    id: '2',
    name: 'cancelled',
    label: 'Cancelled',
    filters: [{ fulfillment_status: 'Cancelled' }]
  },
  {
    id: '3',
    name: 'pending',
    label: 'Pending',
    filters: [{ payment_status: 'Pending' }]
  },
  {
    id: '4',
    name: 'paid',
    label: 'Paid',
    filters: [{ payment_status: 'Paid' }]
  },
  {
    id: '5',
    name: 'completed',
    label: 'Completed',
    filters: [{ payment_status: 'Paid' }, { fulfillment_status: 'Fulfilled' }]
  },
  {
    id: '6',
    name: 'return-in-progress',
    label: 'Return in Progress',
    filters: [
      { payment_status: 'Pending' },
      { return_status: 'Return in Progress' }
    ]
  }
];

const shipOrders = () => console.log('Ship Orders');

const capturePayments = () => console.log('Capture Payments');

export const actions = [
  {
    id: 'ship_orders',
    name: 'ship_orders',
    label: 'Ship Orders',
    onAction: shipOrders
  },
  {
    id: 'capture_payments',
    name: 'capture_payments',
    label: 'Capture Payments',
    onAction: capturePayments
  },
  {
    id: 'fulfill_orders',
    name: 'fulfill_orders',
    label: 'Fulfill Orders',
    onAction: shipOrders
  },
  {
    id: 'print_orders',
    name: 'print_orders',
    label: 'Print Orders',
    onAction: capturePayments
  }
];
