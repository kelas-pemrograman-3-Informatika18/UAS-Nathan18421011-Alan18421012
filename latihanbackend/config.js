const requestResponse = {
  gagal: (pesan) => {
    return {
      sukses: false,
      pesan: pesan
    }
  },
  sukses: (pesan) => {
    return {
      sukses: true,
      pesan: pesan
    }
  },
  serverError: {
    sukses: false,
    pesan: 'An Error Occurred On Our Server'
  },
  suksesLogin: (data) => {
    return {    
      sukses: true,
      pesan: 'Login Success',
      data: data
    }
  },
  suksesWithData: (data) => {
    return {
        sukses: true,
        pesan: 'Berhasil Memuat Data',
        data: data
    }
  }
}
module.exports = { requestResponse }