const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('Nguyễn Phong Sắc', [
    { street: 'Nguyễn Phong Sắc' },
  ])

  assert('144 Xuân thuỷ, Dịch Vọng Hậu, Cầu giấy, Hà Nội', [
    { housenumber: '144' }, { street: 'Xuân thuỷ' },
    { locality: 'Dịch Vọng Hậu' },
    { county: 'Cầu giấy' }, { region: 'Hà Nội' }
  ])

  assert('Đường B2', [
    { street: 'Đường B2' },
  ])

  assert('35/44 Trần Thái Tông', [
    { housenumber: '35/44' }, { street: 'Trần Thái Tông' },
  ])

  assert('cầu giấy', [
    { county: 'cầu giấy' },
  ])

  assert('Thanh Hà, Hải Dương', [
    { county: 'Thanh Hà' }, { region: 'Hải Dương'}
  ])

  assert('Xuân thuỷ, Cầu giấy', [
    { street: 'Xuân thuỷ' },
    { county: 'Cầu giấy' },
  ])

}


module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`address VIE: ${name}`, testFunction)
  }

  testcase(test, common)
}