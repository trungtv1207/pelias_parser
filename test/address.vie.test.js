const testcase = (test, common) => {
  let assert = common.assert(test)

  // Case 1: full address
  assert('144 Xuân thuỷ, Dịch Vọng Hậu, Cầu giấy, Hà Nội', [
    { housenumber: '144' }, { street: 'Xuân thuỷ' },
    { locality: 'Dịch Vọng Hậu' },
    { county: 'Cầu giấy' }, { region: 'Hà Nội' }
  ])

  assert('12 Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội', [
    { housenumber: '12' }, { street: 'Trần Thái Tông' },
    { locality: 'Dịch Vọng Hậu' },
    { county: 'Cầu Giấy' }, { region: 'Hà Nội' }
  ])

  assert('165 Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội', [
    { housenumber: '165' }, { street: 'Cầu Giấy' },
    { locality: 'Dịch Vọng' },
    { county: 'Cầu Giấy' }, { region: 'Hà Nội' }
  ])

  // Case 2: No housenumber
  assert('Xuân thuỷ, Dịch Vọng Hậu, Cầu giấy, Hà Nội', [
    { street: 'Xuân thuỷ' },
    { locality: 'Dịch Vọng Hậu' },
    { county: 'Cầu giấy' }, { region: 'Hà Nội' }
  ])
  
  assert('Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội', [
    { street: 'Trần Thái Tông' },
    { locality: 'Dịch Vọng Hậu' },
    { county: 'Cầu Giấy' }, { region: 'Hà Nội' }
  ])

  assert('Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội', [
    { street: 'Cầu Giấy' },
    { locality: 'Dịch Vọng' },
    { county: 'Cầu Giấy' }, { region: 'Hà Nội' }
  ])

  // Case 3: No locality
  assert('144 Xuân thuỷ, Cầu giấy, Hà Nội', [
    { housenumber: '144' }, { street: 'Xuân thuỷ' },
    { county: 'Cầu giấy' }, { region: 'Hà Nội' }
  ])

  assert('12 Trần Thái Tông, Cầu Giấy, Hà Nội', [
    { housenumber: '12' }, { street: 'Trần Thái Tông' },
    { county: 'Cầu Giấy' }, { region: 'Hà Nội' }
  ])

  assert('165 Cầu Giấy, Cầu Giấy, Hà Nội', [
    { housenumber: '165' }, { street: 'Cầu Giấy' },
    { county: 'Cầu Giấy' }, { region: 'Hà Nội' }
  ])

  // Case 4: No county
  assert('144 Xuân thuỷ, Dịch Vọng Hậu, Hà Nội', [
    { housenumber: '144' }, { street: 'Xuân thuỷ' },
    { locality: 'Dịch Vọng Hậu' }, { region: 'Hà Nội' }
  ])

  assert('12 Trần Thái Tông, Dịch Vọng Hậu, Hà Nội', [
    { housenumber: '12' }, { street: 'Trần Thái Tông' },
    { locality: 'Dịch Vọng Hậu' }, { region: 'Hà Nội' }
  ])

  assert('165 Cầu Giấy, Dịch Vọng, Hà Nội', [
    { housenumber: '165' }, { street: 'Cầu Giấy' },
    { locality: 'Dịch Vọng' }, { region: 'Hà Nội' }
  ])

  // Case 5: No region
  assert('144 Xuân thuỷ, Dịch Vọng Hậu, Cầu giấy', [
    { housenumber: '144' }, { street: 'Xuân thuỷ' },
    { locality: 'Dịch Vọng Hậu' },
    { county: 'Cầu giấy' }
  ])

  assert('12 Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy', [
    { housenumber: '12' }, { street: 'Trần Thái Tông' },
    { locality: 'Dịch Vọng Hậu' },
    { county: 'Cầu Giấy' }
  ])

  assert('165 Cầu Giấy, Dịch Vọng, Cầu Giấy', [
    { housenumber: '165' }, { street: 'Cầu Giấy' },
    { locality: 'Dịch Vọng' },
    { county: 'Cầu Giấy' }
  ])

  // Case 6: just housenumber and street
  assert('144 Xuân thuỷ', [
    { housenumber: '144' }, { street: 'Xuân thuỷ' },
  ])

  assert('12 Trần Thái Tông', [
    { housenumber: '12' }, { street: 'Trần Thái Tông' },
  ])

  assert('165 Cầu Giấy', [
    { housenumber: '165' }, { street: 'Cầu Giấy' },
  ])
  // Case 7: the same between street's name and locality's name
  assert('10 dịch vọng hậu, dịch vọng hậu', [
    { housenumber: '10' }, { street: 'dịch vọng hậu' },
    { locality: 'dịch vọng hậu' }
  ])

  assert('30 Mai Dịch, Mai Dịch, Hà Nội', [
    { housenumber: '30' }, { street: 'Mai Dịch' },
    { locality: 'Mai Dịch' },
    {region: 'Hà Nội' }
  ])

  assert('16 dịch vọng, dịch vọng', [
    { housenumber: '16' }, { street: 'dịch vọng' },
    { locality: 'dịch vọng' }
  ])
// case 8
  assert('144 Xuan thuy, cau giay, ha noi', [
    { housenumber: '144' }, { street: 'Xuan thuy' },
    { county: 'cau giay' }, { region: 'ha noi' }
  ])

  assert('12 Tran Thai Tong, Dich Vong Hau, Cau Giay, Ha Noi', [
    { housenumber: '12' }, { street: 'Tran Thai Tong' },
    { locality: 'Dich Vong Hau' },
    { county: 'Cau Giay' }, { region: 'Ha Noi' }
  ])

  assert('165 Cau Giay', [
    { housenumber: '165' }, { street: 'Cau Giay' }
  ])
  //case 9
  assert('165 Cầu Giấy, Cầu Giấy', [
    { housenumber: '165' }, { street: 'Cầu Giấy' },
    { county: 'Cầu Giấy' }
  ])
  // Maybe one day this test will pass...
  // assert('Thanh Hà, Hải Dương', [
  //   { county: 'Thanh Hà' }, { region: 'Hải Dương'}
  // ])

}


module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`address VIE: ${name}`, testFunction)
  }

  testcase(test, common)
}