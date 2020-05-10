import React from 'react'
import { Box } from 'theme-ui'

export default ({type}) => <Box p={2}
                                color='primary'
                                bg='secondary'>
                                    <div>{type}</div>
                                </Box>